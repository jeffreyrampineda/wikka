import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav
        className="navbar bg-primary navbar-expand-lg py-3 px-5"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="navbar-brand">Wikka</span>
          </Link>
          <nav className="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/stories"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Stories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
