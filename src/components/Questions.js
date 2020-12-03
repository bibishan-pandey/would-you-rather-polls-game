import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { ERROR_404, HOME_URL } from "../settings/urls";

import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

class Questions extends Component {
  render() {
    if (this.props.redirect) return <Redirect to={ERROR_404} />;

    const {
      author,
      isAnswered,
      question: { optionOne, optionTwo },
      match: {
        params: { id },
      },
    } = this.props;

    return (
      <div className={"mt-4"}>
        {isAnswered.optionOne || isAnswered.optionTwo ? (
          <AnsweredQuestion
            optionOne={optionOne}
            optionTwo={optionTwo}
            answered={isAnswered.optionOne ? "optionOne" : "optionTwo"}
          />
        ) : (
          <UnansweredQuestion id={id} />
        )}
        <div className={"card pt-4 pb-3 my-4 text-center"}>
          <p>
            Asked by {author.name}
            <img
              src={author.avatarURL}
              alt={author.name}
              aria-hidden="true"
              className={"img-fluid"}
              width={50}
            />
          </p>
        </div>
        <Link to={HOME_URL} className={"btn btn-outline-primary"}>
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ authUser, questions, users }, props) {
  const question = questions[props.match.params.id];

  if (!question) {
    return { redirect: true };
  }

  return {
    author: users[question.author],
    question,
    isAnswered: {
      optionOne: question.optionOne.votes.includes(authUser),
      optionTwo: question.optionTwo.votes.includes(authUser),
    },
  };
}

export default connect(mapStateToProps)(Questions);
