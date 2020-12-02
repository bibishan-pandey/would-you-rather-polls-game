import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import {connect} from 'react-redux';

import {
  ERROR_404,
  HOME_URL,
  LEADERBOARD,
  NEW_QUESTIONS,
  QUESTIONS,
  SIGN_IN,
} from "./settings/urls";

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/Navbar";

import {handleGetUsers} from "./actions/users";
import {handleGetQuestions} from "./actions/questions";

class App extends Component {
  componentDidMount() {
    const {dispatch, questions, users} = this.props;
    dispatch(handleGetUsers());
    dispatch(handleGetQuestions());
  }

  render() {
    const {isAuthenticated} = this.props;

    return (
      <div>
        <NavBar />
        <div className={"container-fluid"}>
          <Switch>

            {/*TODO: Add Home/Dashboard Component*/}
            {/*<AuthenticatedRoute exact={true} path={HOME_URL} component={Dashboard} isAuthenticated={isAuthenticated}/>*/}
            <Route exact={true} path={HOME_URL} component={Dashboard}/>

            {/*TODO: Add New Questions Component*/}
            {/*<AuthenticatedRoute path={NEW_QUESTIONS} component={AddQuestion} isAuthenticated={isAuthenticated}/>*/}

            {/*TODO: Add Detail of Question/Poll*/}
            {/*<AuthenticatedRoute path={QUESTIONS + '/:question_id'} component={Questions} isAuthenticated={isAuthenticated}/>*/}

            {/*TODO: Add Leaderboard container*/}
            {/*<AuthenticatedRoute path={LEADERBOARD} component={Leaderboard} isAuthenticated={isAuthenticated}/>*/}

            {/*TODO: Add sign in container*/}
            {/*<Route path={SIGN_IN} component={SignIn}/>*/}

            {/*TODO: Add 404 component*/}
            {/*<Route path={ERROR_404} component={Error404}/>*/}

            {/*<Redirect to={ERROR_404} />*/}
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps({authUser, questions, users}) {
  return {
    isAuthenticated: !!authUser,
    questions,
    users
  };
}

export default connect(mapStateToProps)(App);
