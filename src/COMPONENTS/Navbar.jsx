import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../IMG/LOGO.svg";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="logo-container">
          <NavLink to="/">
            <Logo className="logo" />
          </NavLink>
        </div>
        <div className="navbar-content">
          <NavLink
            className={({ isActive }) => {
              return !isActive ? "content about" : "content about active";
            }}
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}
