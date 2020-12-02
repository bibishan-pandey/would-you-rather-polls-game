import { hideLoading, showLoading } from "react-redux-loading";
import { _getQuestions } from "../utils/_DATA";

// questions actions
export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

// getQuestions action creator
const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

// saveQuestion action creator
export const saveQuestion = (question) => {
  return {
    type: SAVE_QUESTION,
    question,
  };
};

// saveQuestionAnswer action creator
export const saveQuestionAnswer = ({ authUser, questionId, answer }) => {
  return {
    type: SAVE_QUESTION_ANSWER,
    authUser,
    questionId,
    answer,
  };
};

// handleGetQuestions async action creator
export const handleGetQuestions = () => {
  return (dispatch) => {
    dispatch(showLoading());

    return _getQuestions()
      .then((questions) => dispatch(getQuestions(questions)))
      .then(() => dispatch(hideLoading()));
  };
};
