import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { HOME_URL, LEADERBOARD, NEW_QUESTIONS } from "../settings/urls";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="md" className={"mb-5"}>
      <NavLink className={"navbar-brand"} to={HOME_URL} exact={true}>
        Would you rather...?
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className={"nav-link"} to={HOME_URL} exact={true}>
            Home
          </NavLink>
          <NavLink className={"nav-link"} to={NEW_QUESTIONS}>
            New Questions
          </NavLink>
          <NavLink className={"nav-link"} to={LEADERBOARD}>
            Leader Board
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
