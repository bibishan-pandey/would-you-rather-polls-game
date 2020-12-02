import React from "react";
import { connect } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Redirect } from "react-router-dom";

import {
  HOME_URL,
  LEADERBOARD,
  NEW_QUESTIONS,
  SIGN_IN,
} from "../settings/urls";
import { setAuthUser } from "../actions/authUser";

const NavBar = ({ user, dispatch }) => {
  if (!user) {
    return <Redirect to={SIGN_IN} />;
  }
  return (
    <Navbar bg="light" variant="light" expand="md" className={"mb-5"}>
      <NavLink className={"navbar-brand"} to={HOME_URL} exact={true}>
        Would you rather...?
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <React.Fragment>
            <NavLink className={"nav-link"} to={HOME_URL} exact={true}>
              Home
            </NavLink>
            <NavLink className={"nav-link"} to={NEW_QUESTIONS}>
              New Questions
            </NavLink>
            <NavLink className={"nav-link"} to={LEADERBOARD}>
              Leader Board
            </NavLink>
          </React.Fragment>
        </Nav>
        <Nav className={"ml-auto"}>
          <div className={"d-flex align-items-center"}>
            {user.name}
            <img
              src={user.avatarURL}
              alt={user.name}
              aria-hidden="true"
              className={"img-fluid"}
              width={30}
            />
            <button
              onClick={() => dispatch(setAuthUser(null))}
              className={"btn btn-danger"}
            >
              Sign Out
            </button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

function mapStateToProps({ authUser, users, dispatch }) {
  return {
    user: users[authUser],
    dispatch,
  };
}

export default connect(mapStateToProps)(NavBar);
