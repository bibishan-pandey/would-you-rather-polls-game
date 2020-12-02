import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";

import { connect } from "react-redux";

class Dashboard extends Component {

  state = {
    key: 'unanswered',
  };

  setTabs = (key) => {
    this.setState({key});
  };

  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;

    return (
      <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example" activeKey={this.state.key}
            onSelect={(k) => this.setTabs(k)}>
        <Tab eventKey="unanswered" title="Unanswered Questions">
          {unansweredQuestions.length ? unansweredQuestions.map(question => (
            console.log('Unanswered questions', question)
          )) : <p>There aren't any unanswered questions</p>}
        </Tab>
        <Tab eventKey="answered" title="Answered Questions">
          {answeredQuestions.length ? answeredQuestions.map(question => (
            console.log('Answered questions', question)
          )) : <p>There aren't any answered questions</p>}
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps({ authUser, questions }) {
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
  };
}

export default connect(mapStateToProps)(Dashboard);
