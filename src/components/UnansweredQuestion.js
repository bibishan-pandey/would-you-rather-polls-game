import React, { Component } from "react";
import { connect } from "react-redux";

import { handleSaveQuestionAnswer } from "../actions/shared";

class UnansweredQuestion extends Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { question } = this.props;

    this.props.dispatch(
      handleSaveQuestionAnswer(question.id, this.state.value)
    );
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const {
      question: { optionOne, optionTwo },
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className="form-group row">
          <legend className="col-form-legend col-sm-4">Question options</legend>
          <div className="col-sm-6">
            <div className="form-check">
              <div className={"row"}>
                <div className={"col-12 col-sm-6"}>
                  <label className="form-check-label">
                    <input
                      className="form-check-input radio-inline"
                      type="radio"
                      id="optionOne"
                      name="questionOptions"
                      value="optionOne"
                      checked={this.state.value === "optionOne"}
                      onChange={this.handleChange}
                    />
                    {optionOne.text}
                  </label>
                </div>
                <div className={"col-12 col-sm-6"}>
                  <label className="form-check-label">
                    <input
                      className="form-check-input radio-inline"
                      type="radio"
                      id="optionTwo"
                      name="questionOptions"
                      value="optionTwo"
                      checked={this.state.value === "optionTwo"}
                      onChange={this.handleChange}
                    />
                    {optionTwo.text}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <button
          className={"btn btn-outline-primary"}
          disabled={!this.state.value}
        >
          Submit Answer
        </button>
      </form>
    );
  }
}

function mapStateToProps({ questions }, props) {
  const question = questions[props.id];

  return {
    question,
  };
}

export default connect(mapStateToProps)(UnansweredQuestion);
