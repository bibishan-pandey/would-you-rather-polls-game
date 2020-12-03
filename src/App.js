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

import AddQuestion from "./components/AddQuestion";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Dashboard from "./components/Dashboard";
import Error404 from "./components/Error404";
import Leaderboard from "./components/Leaderboard";
import NavBar from "./components/Navbar";
import Questions from "./components/Questions";
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

    if (loading.default !== 0) return <LoadingBar loading={1} progressIncrease={50} />;

    return (
      <React.Fragment>
        <NavBar />
        <div className={"container-fluid"}>
            <Switch>
              <Route path={SIGN_IN} component={SignIn} />
              <AuthenticatedRoute exact={true} path={HOME_URL} component={Dashboard} isAuthenticated={isAuthenticated}/>
              <AuthenticatedRoute path={NEW_QUESTIONS} component={AddQuestion} isAuthenticated={isAuthenticated}/>
              <AuthenticatedRoute path={QUESTIONS + "/:id"} component={Questions} isAuthenticated={isAuthenticated}/>
              <AuthenticatedRoute path={LEADERBOARD} component={Leaderboard} isAuthenticated={isAuthenticated}/>
              <Route path={ERROR_404} component={Error404} />

              <Redirect to={HOME_URL} />
            </Switch>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authUser, loadingBar }) {
  return {
    isAuthenticated: !!authUser,
    loading: loadingBar,
  };
}

export default connect(mapStateToProps)(App);
