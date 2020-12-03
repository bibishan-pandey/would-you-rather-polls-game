import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { setAuthUser } from "../actions/authUser";
import { HOME_URL } from "../settings/urls";

class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    selectedUser: "",
  };

  handleChange = (e) => {
    this.setState({ selectedUser: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthUser(this.state.selectedUser));
    this.setState({ redirectToReferrer: true });
    // this.props.history.push(HOME_URL);
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: HOME_URL },
    };
    console.log(from);
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    const name = "username";
    return (
      <div className={"row mt-5"}>
        <div className={"col"}></div>
        <div className={"col"}>
          <form onSubmit={this.handleSubmit}>
            <h1>Sign In</h1>
            <div className="form-group">
              <label htmlFor={name} className="form-label">
                Sign in as one of the following user
              </label>
              <select
                id={name}
                name={name}
                value={this.state.selectedUser}
                onChange={this.handleChange}
                className="custom-select"
              >
                <option value="">Select User</option>
                {this.props.users.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              className={"btn btn-outline-primary"}
              disabled={!this.state.selectedUser}
            >
              Sign in
            </button>
          </form>
        </div>
        <div className={"col"}></div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map((user) => users[user]),
  };
}

export default connect(mapStateToProps)(SignIn);
