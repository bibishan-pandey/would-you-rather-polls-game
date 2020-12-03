import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { handleSaveQuestion } from "../actions/shared";
import { HOME_URL } from "../settings/urls";

class AddQuestion extends Component {
  state = {
    goHome: false,
    firstOption: "",
    secondOption: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstOption, secondOption } = this.state;

    this.props
      .dispatch(handleSaveQuestion(firstOption, secondOption))
      .then(() =>
        this.setState({
          goHome: true,
          firstOption: "",
          secondOption: "",
        })
      );
  };

  render() {
    const { goHome, firstOption, secondOption } = this.state;

    return goHome ? (
      <Redirect to={HOME_URL} />
    ) : (
      <div className={"mt-4"}>
        <h1>Add a new question</h1>
        <p>
          Would you rather [<strong>Option 1</strong>] or [
          <strong>Option 2</strong>]?
        </p>
        <form onSubmit={this.handleSubmit}>
          <div className={"form-group"}>
            <label htmlFor="firstOption">First Option</label>
            <input
              type="text"
              name="firstOption"
              className={"form-control"}
              value={firstOption}
              placeholder="Enter the text for first option"
              onChange={this.handleChange}
            />
          </div>
          <div className={"form-group"}>
            <label htmlFor="secondOption">Second Option</label>
            <input
              type="text"
              name="secondOption"
              className={"form-control"}
              value={secondOption}
              placeholder="Enter the text for second option"
              onChange={this.handleChange}
            />
          </div>
          <button
            className={"btn btn-outline-success"}
            disabled={
              !firstOption || !secondOption || firstOption === secondOption
            }
          >
            Add Question
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(AddQuestion);
