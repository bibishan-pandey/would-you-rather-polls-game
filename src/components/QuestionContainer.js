import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import { QUESTIONS } from "../settings/urls";

const QuestionContainer = ({ question, user }) => {
  return (
    <div className={"col-12 col-md-4 mt-4"}>
      <Card>
        <Card.Header>
          <img
            src={user.avatarURL}
            alt={user.name}
            aria-hidden="true"
            className={"img-fluid"}
            width={50}
          />
          <Card.Title>{user.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {user.name}asks if you would you rather {question.optionOne.text} or{" "}
            {question.optionTwo.text}?
          </Card.Text>
          <Link to={QUESTIONS + `/${question.id}`}>View Question</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuestionContainer;
