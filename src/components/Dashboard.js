import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";

import QuestionContainer from "./QuestionContainer";

class Dashboard extends Component {
  state = {
    key: "unanswered",
  };

  setTabs = (key) => {
    this.setState({ key });
  };

  render() {
    const { answeredQuestions, unansweredQuestions, users } = this.props;

    return (
      <Tabs
        defaultActiveKey="unanswered"
        activeKey={this.state.key}
        onSelect={(k) => this.setTabs(k)}
      >
        <Tab eventKey="unanswered" title="Unanswered Questions">
          <div className={"row"}>
            {unansweredQuestions.length ? (
              unansweredQuestions.map((question) => (
                <QuestionContainer
                  key={question.id}
                  question={question}
                  user={users[question.author]}
                />
              ))
            ) : (
              <div className={'col'}>
                <p className={"mt-4"}>There aren't any unanswered questions</p>
              </div>
            )}
          </div>
        </Tab>
        <Tab eventKey="answered" title="Answered Questions">
          <div className={"row"}>
            {answeredQuestions.length ? (
              answeredQuestions.map((question) =>
                <QuestionContainer
                  key={question.id}
                  question={question}
                  user={users[question.author]}
                />
              )
            ) : (
              <div className={'col'}>
                <p className={"mt-4"}>There aren't any answered questions</p>
              </div>
            )}
          </div>
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps({ authUser, questions, users }) {
  const sortTimeDescending = (a, b) => b.timestamp - a.timestamp;
  const allQuestions = Object.keys(questions).map(
    (question) => questions[question]
  );
  const answeredQuestions = allQuestions
    .filter(
      (question) =>
        question.optionOne.votes.includes(authUser) ||
        question.optionTwo.votes.includes(authUser)
    )
    .sort(sortTimeDescending);
  const unansweredQuestions = allQuestions
    .filter((question) => !answeredQuestions.includes(question))
    .sort(sortTimeDescending);

  return {
    answeredQuestions,
    unansweredQuestions,
    users,
  };
}

export default connect(mapStateToProps)(Dashboard);
