import { Link } from "react-router-dom";
import React, { useState } from "react";
import './navbar.scss';

function Navbar(props) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
        Logo
      </Link>
      <ul className={open ? "nav-links-active" : "nav-links"}>
        <li className="nav-item">
          {" "}
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          {" "}
          <Link to="/news" className="nav-link" onClick={() => setOpen(false)}>
            News
          </Link>
        </li>
        <li className="nav-item">
          {" "}
          <Link to="/user" className="nav-link" onClick={() => setOpen(false)}>
            User
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
