import React from "react";
import { Redirect, Route } from "react-router-dom";

import { SIGN_IN } from "../settings/urls";

const AuthenticatedRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: SIGN_IN,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default AuthenticatedRoute;
