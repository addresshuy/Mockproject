import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Lang from "../Lang";

import "./Navbar.scss";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineLineChart,
  AiOutlineRead,
  AiOutlineUserAdd,
  AiOutlineTeam,
} from "react-icons/ai";
import logo from "../../assets/Covid_Watch.png";

function Navbar(props) {
  const { t } = useTranslation();

  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  const history = useHistory();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.clear();
    history.push("/");
  };
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" onClick={() => setOpen(false)} className="nav-logo">
        <img src={logo} width="50" height="50" alt="logo" />
        <span style={{ color: "red", fontWeight: "bold" }}>
          {t("Navbar.Logo")}
        </span>
      </Link>
      <div onClick={() => setOpen(!open)} className="nav-icon">
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <AiOutlineRead /> {t("Navbar.Home")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/covid" className="nav-link">
            <AiOutlineLineChart /> {t("Navbar.Covid")}
          </Link>
        </li>
        <li>
          <Lang />
        </li>
        {isLoggedIn ? (
          <li className="nav-item">
            <div className="log-out" onClick={handleLogout}>
              <AiOutlineLogout /> {t("Navbar.Logout")}
            </div>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <AiOutlineUserAdd />
                {t("Navbar.Login")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                <AiOutlineTeam /> {t("Navbar.Register")}
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
