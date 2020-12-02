import {
  GET_USERS,
  SAVE_USER_ANSWER,
  SAVE_USER_QUESTION,
} from "../actions/users";

const users = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_USER_ANSWER:
      const { authUser, questionId, answer } = action;
      const users = {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [questionId]: answer,
          },
        },
      };
      return {
        ...state,
        ...users,
      };
    case SAVE_USER_QUESTION:
      return {
        ...state,
        [action.authUser]: {
          ...state[action.authUser],
          questions: [...state[action.authUser].questions, action.id],
        },
      };
    default:
      return state;
  }
};

export default users;
