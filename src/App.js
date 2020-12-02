import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading";

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
import Error404 from "./components/Error404";
import Leaderboard from "./components/Leaderboard";
import NavBar from "./components/Navbar";
import SignIn from "./components/SignIn";

import { handleGetUsers } from "./actions/users";
import { handleGetQuestions } from "./actions/questions";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetUsers());
    dispatch(handleGetQuestions());
  }

  render() {
    const { isAuthenticated, loading } = this.props;

    return (
      <React.Fragment>
        <LoadingBar />
        <NavBar />
        <div className={"container-fluid"}>
          <Switch>
            {!loading && (
              <React.Fragment>
                <AuthenticatedRoute
                  exact={true}
                  path={HOME_URL}
                  component={Dashboard}
                  isAuthenticated={isAuthenticated}
                />

                {/* TODO: Add New Questions Component*/}
                {/* <AuthenticatedRoute path={NEW_QUESTIONS} component={AddQuestion} isAuthenticated={isAuthenticated}/>*/}

                {/* TODO: Add Detail of Question/Poll*/}
                {/* <AuthenticatedRoute path={QUESTIONS + '/:question_id'} component={Questions} isAuthenticated={isAuthenticated}/>*/}

                <AuthenticatedRoute
                  path={LEADERBOARD}
                  component={Leaderboard}
                  isAuthenticated={isAuthenticated}
                />
              </React.Fragment>
            )}

            <Route path={SIGN_IN} component={SignIn} />

            <Route path={ERROR_404} component={Error404}/>

            <Redirect to={ERROR_404} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    isAuthenticated: !!authUser,
    loading: authUser === null,
  };
}

export default connect(mapStateToProps)(App);
