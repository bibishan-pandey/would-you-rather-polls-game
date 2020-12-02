import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

class Leaderboard extends Component {
  render() {
    const { authUser, users } = this.props;
    const formattedUsers = Object.keys(users).map((id) => {
      const userData = users[id];
      const numAnswers = Object.keys(userData.answers).length;
      const numQuestions = userData.questions.length;

      return {
        ...userData,
        numAnswers,
        numQuestions,
        total: numAnswers + numQuestions,
      };
    });

    return (
      <Table bordered hover>
        <thead>
          <tr>
            <th rowSpan="2" scope="col">
              User
            </th>
            <th colSpan="3">Questions</th>
          </tr>
          <tr>
            <th scope="col">Answered</th>
            <th scope="col">Added</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {formattedUsers
            .sort((a, b) => b.total - a.total)
            .map((user) => (
              <tr
                key={user.id}
                className={authUser === user.id ? "table-active" : ""}
              >
                <td>
                  <div className={"d-flex align-items-center"}>
                    <img
                      src={user.avatarURL}
                      alt={user.name}
                      aria-hidden="true"
                      className={"img-fluid"}
                      width={30}
                    />
                    {user.name}
                  </div>
                </td>
                <td>{user.numAnswers}</td>
                <td>{user.numQuestions}</td>
                <td>{user.total}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps({ authUser, users }) {
  return { authUser, users };
}

export default connect(mapStateToProps)(Leaderboard);
