import React from "react";
import { Route, Redirect } from "react-router-dom";


function PrivateRouter({ component: Component, ...rest }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    </div>
  );
}

export default PrivateRouter;
