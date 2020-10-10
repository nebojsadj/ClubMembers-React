import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand text-light">
          CRUD-React
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link text-light">
              Members
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/new" className="nav-link text-light">
              NewMember
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/actions" className="nav-link text-light">
              Actions
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
