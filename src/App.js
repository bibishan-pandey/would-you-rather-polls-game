import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import {
  ERROR_404,
  HOME_URL,
  LEADERBOARD,
  NEW_QUESTIONS,
  QUESTIONS,
  SIGN_IN,
} from "./settings/urls";

import NavBar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className={"container-fluid"}>
          <Switch>
            {/*TODO: Add Home/Dashboard Component*/}
            {/*<Route path={HOME_URL} exact component={DashboardContainer} />*/}

            {/*TODO: Add New Questions Component*/}
            {/*<Route path={NEW_QUESTIONS} component={NewQuestionsContainer} />*/}

            {/*TODO: Add Detail of Question/Poll*/}
            {/*<Route path={QUESTIONS + '/:question_id'} component={QuestionsContainer} />*/}

            {/*TODO: Add Leaderboard container*/}
            {/*<Route path={LEADERBOARD} component={LeaderboardContainer} />*/}

            {/*TODO: Add sign in container*/}
            {/*<Route path={SIGN_IN} component={SignInContainer} />*/}

            {/*TODO: Add 404 component*/}
            {/*<Route path={ERROR_404} component={Error_404Container} />*/}
            <Redirect to={ERROR_404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
