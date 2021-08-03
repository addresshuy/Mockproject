import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GlobalActions } from "../../redux/slices/globalSlice";
import GlobalLoading from "../GlobalLoading";
import { Link } from "react-router-dom";
import "./LoginUser.scss";
import Layout from "../../HOCs/Layout";

function LoginUser(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const isLoading = useSelector((state) => state.GlobalReducer.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(GlobalActions.toggleLoading());
    setTimeout(() => {
      dispatch(GlobalActions.toggleLoading());
    }, 500);
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const isValidated = validateLogin(username, password);
    if (isValidated) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      history.push("/covid");
    }
  };
  const validateLogin = (username, password) => {
    const user = localStorage.getItem("username");
    const pass = localStorage.getItem("password");
    if (!username || !password) {
      setMessage("Please enter your account and password!");
      return false;
    }
    if (username === "admin" && password === "admin") {
      setMessage("Logged in successfully!");
      history.push("/covid");
      return true;
    }
    if (username === user && password === pass) {
      setMessage("Logged in successfully!");
      return true;
    }
    setMessage("Incorrect account or password!");
    return false;
  };

  return (
    <>
      {isLoading ? (
        <GlobalLoading />
      ) : (
        <div className="container-login">
          <div className="container-login-body">
            <form onSubmit={handleLoginSubmit}>
              <h2>LOGIN FORM</h2>
              <div className="container-body-form">
                <label>
                  <input
                    placeholder="UserName"
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </label>
                <label>
                  <input
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <div className="message-error">{message}</div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>

              <span className="note-login">
                Don’t have an account?{" "}
                <Link to={"/register"} style={{ textDecoration: "none" }}>
                  Sign up
                </Link>
              </span>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout(LoginUser);
