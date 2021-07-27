import React from "react";

import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "./header.scss";

export default function Header(props) {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  const history = useHistory();
  const handleLogout = () => {
    // localStorage.setItem("isLoggedIn", false);
    // dispatch(GlobalActions.resetStore());
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="header-container" id="header">
      <div className="header-body">
        <div className="menu">
          <ul>
            <li>
              <Button color="primary">
                <Link to="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button color="primary">
                <Link to="/covid">Covid</Link>
              </Button>
            </li>
            {isLoggedIn ? (
              <li>
                <Button variant="outlined" color="red" disableElevation>
                  <div onClick={handleLogout}>Log out</div>
                </Button>
              </li>
            ) : (
              <>
                <li>
                  <Button variant="outlined" color="primary" disableElevation>
                    <Link to="/login">Login</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="outlined" color="primary" disableElevation>
                    <Link to="/register">Register</Link>
                  </Button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
