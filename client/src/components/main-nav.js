import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      User Dashboard
    </NavLink>

    <NavLink
      to="/community"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Community Dashboard
    </NavLink>

    <NavLink
      to="/books"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Books
    </NavLink>
  </div>
);

export default MainNav;
