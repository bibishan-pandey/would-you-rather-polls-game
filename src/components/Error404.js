import React from "react";
import { Link } from "react-router-dom";
import { SIGN_IN} from "../settings/urls";

const Error404 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={"text-center m-5"}>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className={"text-danger m-5"}>
              Sorry, an error has occurred. Requested resource not has either moved or the url is invalid!
            </div>
            <div className="error-actions">
              <Link to={SIGN_IN} className={"btn btn-lg btn-primary"}>
                Take Me Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
