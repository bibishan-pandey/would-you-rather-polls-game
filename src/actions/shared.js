import { showLoading, hideLoading } from "react-redux-loading";

import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

import { saveQuestion, saveQuestionAnswer } from "./questions";
import { saveUserAnswer, saveUserQuestion } from "./users";

// handleSaveQuestion async action creator
export const handleSaveQuestion = (firstOption, secondOption) => {
  return (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(showLoading());

    return _saveQuestion({
      author: authUser,
      optionOneText: firstOption,
      optionTwoText: secondOption,
    })
      .then((question) => {
        dispatch(saveQuestion(question));
        dispatch(saveUserQuestion({ authUser, id: question.id }));
      })
      .catch((e) => {
        console.warn("An error occurred while saving question: ", e.message);
        alert("An error occurred while saving question. Please try again.");
      })
      .finally(() => dispatch(hideLoading()));
  };
};

// handleSaveQuestionAnswer async action creator
export const handleSaveQuestionAnswer = (questionId, answer) => {
  return (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(showLoading());

    return _saveQuestionAnswer({ authUser, questionId, answer })
      .then(() => {
        dispatch(saveQuestionAnswer({ authUser, questionId, answer }));
        dispatch(saveUserAnswer({ authUser, questionId, answer }));
      })
      .catch((e) => {
        console.warn("An error occurred while saving answer: ", e.message);
        alert("An error occurred while saving answer. Please try again.");
      })
      .finally(() => dispatch(hideLoading()));
  };
};
