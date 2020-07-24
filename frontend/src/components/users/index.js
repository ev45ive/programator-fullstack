import React from "react";
import { NavLink } from "react-router-dom";

console.log("Header componentd loaded");

const Header = () => {
  return (
    <>
      <NavLink to="/orders" className="">
        <i className="fas fa-money-check-alt"></i>
        <label className="navbar-item-label">Orders</label>
      </NavLink>
    </>
  );
};
export default Header;
