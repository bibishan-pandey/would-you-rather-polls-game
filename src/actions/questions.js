import { hideLoading, showLoading } from "react-redux-loading";
import { _getQuestions } from "../utils/_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

export const saveQuestion = (question) => {
  return {
    type: SAVE_QUESTION,
    question,
  };
};

export const saveQuestionAnswer = ({ authUser, questionId, answer }) => {
  return {
    type: SAVE_QUESTION_ANSWER,
    authUser,
    questionId,
    answer,
  };
};

export const handleGetQuestions = () => {
  return (dispatch) => {
    dispatch(showLoading());

    return _getQuestions()
      .then((questions) => dispatch(getQuestions(questions)))
      .then(() => dispatch(hideLoading()));
  };
};
