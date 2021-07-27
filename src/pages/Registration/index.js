
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../Registration/Registration.scss";
import GlobalLoading from "../GlobalLoading";
import { GlobalActions } from "../../redux/rootAction";
import Layout from '../../HOCs/Layout'

function Registration(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messeger, setMesseger] = useState("");
  const isLoading = useSelector((state) => state.GlobalReducer.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const isValidated = validateFormRegister(
      username,
      email,
      password,
      confirmPassword
    );
    if (isValidated) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("email", email);
      // dispatch(GlobalActions.toggleLoading(true));
      setMesseger("Sign Up Success!!!");
      history.push("/login");
    }
  };
  const validateFormRegister = (username, email, password, confirmPassword) => {
    if (!username || !email || !password) {
      setMesseger("Please enter full information");
      return false;
    }
    if (username.length < 8) {
      setMesseger("Username less than 8 characters!");
      return false;
    }
    if (password.length < 8) {
      setMesseger("Password less than 8 characters!");
      return false;
    }
    if (password !== confirmPassword) {
      setMesseger("Passwords and Confirm password not match!");
      return false;
    }
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      return true;
    } else {
      setMesseger("Invalid email format");
      return false;
    }
    
  };

  useEffect(() => {
    dispatch(GlobalActions.toggleLoading());
    setTimeout(() => {
      dispatch(GlobalActions.toggleLoading());
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <GlobalLoading />
      ) : (
        <div className="container-registration">
          <div className="container-registration-body">
            <form onSubmit={handleSubmitForm}>
              <h2>REGISTRATION</h2>
              
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="input-field">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-field">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="input-field">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className='message-error'>{messeger}</div>
              <div className="row text-center">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={handleSubmitForm}
                >
                  Sign Up
                </button>
              </div>
              <div className="row text-center">
                <span className='note-register'>Already have an account? <Link to={"/login"} style={{ textDecoration: 'none' }}>Log in</Link></span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout(Registration);
