import {
  GET_QUESTIONS,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER,
} from "../actions/questions";

// users reducer
const users = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case SAVE_QUESTION_ANSWER:
      const { authUser, questionId, answer } = action;
      const questions = {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: [...state[questionId][answer].votes, authUser],
          },
        },
      };
      return {
        ...state,
        ...questions,
      };
    default:
      return state;
  }
};

export default users;
