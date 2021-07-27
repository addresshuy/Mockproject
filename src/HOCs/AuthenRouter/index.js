import React from "react";
import { Redirect, Route } from "react-router-dom";

function AuthenRouter({ component: Component, ...rest }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return isLoggedIn ? (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          ) : (
            <Component {...props} />
          );
        }}
      />
    </div>
  );
}

export default AuthenRouter;
