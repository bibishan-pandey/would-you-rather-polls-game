import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { HOME_URL } from "../settings/urls";

class Questions extends Component {
  render() {
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
        {isAnswered.optionOne || isAnswered.optionTwo
          ? console.log(optionOne, optionTwo)
          : console.log(id)}
        <p>
          Asked by {author.name}{" "}
          <img
            src={author.avatarURL}
            alt={author.name}
            aria-hidden="true"
            className={"img-fluid"}
            width={50}
          />
        </p>
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