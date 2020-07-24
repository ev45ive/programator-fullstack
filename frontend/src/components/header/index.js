import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo/logotype";

console.log("Header componentd loaded");

const Header = () => {
  return (
    <>
      <header>
      <Logo />
        <div className="welcome">Welcome Johnny!</div>
        <div className="weather"></div>
        <NavLink to="/categories" className="navbar-item">
          <i className="fas fa-th"></i>
          <label className="navbar-item-label"></label>
        </NavLink>
        <NavLink to="/blog" className="navbar-item">
          <i className="fas fa-comments-dollar"></i>
          <label className="navbar-item-label"></label>
        </NavLink>
        <NavLink to="/cms" className="navbar-item">
          <i className="fas fa-ellipsis-v"></i>
          <label className="navbar-item-label"></label>
        </NavLink>
      </header>
    </>
  );
};
export default Header;
