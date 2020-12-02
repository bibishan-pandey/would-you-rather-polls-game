import { hideLoading, showLoading } from "react-redux-loading";
import { _getUsers } from "../utils/_DATA";

// users actions
export const GET_USERS = "GET_USERS";
export const SAVE_USER_QUESTION = "SAVE_USER_QUESTION";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";

// getUsers action creator
const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

// saveUserQuestion action creator
export const saveUserQuestion = ({ authUser, id }) => {
  return {
    type: SAVE_USER_QUESTION,
    authUser,
    id,
  };
};

// saveUserAnswer action creator
export const saveUserAnswer = ({ authUser, questionId, answer }) => {
  return {
    type: SAVE_USER_ANSWER,
    authUser,
    questionId,
    answer,
  };
};

// handleGetUsers async action creator
export function handleGetUsers() {
  return (dispatch) => {
    dispatch(showLoading());

    return _getUsers()
      .then((users) => dispatch(getUsers(users)))
      .then(() => dispatch(hideLoading()));
  };
}
