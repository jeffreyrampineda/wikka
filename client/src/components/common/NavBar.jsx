import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="navbar container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbar--brand">Wikka</span>
        </Link>
        <ul className="navbar__nav">
          <li className="navbar__nav--item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "navbar__nav--link" + (isActive ? " active" : "")
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__nav--item">
            <NavLink
              to="/stories"
              className={({ isActive }) =>
                "navbar__nav--link" + (isActive ? " active" : "")
              }
            >
              Stories
            </NavLink>
          </li>
          <li className="navbar__nav--item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                "navbar__nav--link" + (isActive ? " active" : "")
              }
            >
              About
            </NavLink>
          </li>
          <li className="navbar__nav--item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                "navbar__nav--link" + (isActive ? " active" : "")
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
