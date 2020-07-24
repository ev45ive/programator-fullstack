import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  return (
    <>
      <nav>
        <NavLink to="/home" className="navbar-item">
          <i className="fas fa-home"></i>
          <label className="navbar-item-label">Home</label>
        </NavLink>
        <NavLink to="/search" className="navbar-item">
          <i className="fas fa-search"></i>
          <label className="navbar-item-label">Search</label>
        </NavLink>
        <NavLink to="/cart" className="navbar-item">
          <i className="fas fa-shopping-bag"></i>
          <label className="navbar-item-label">Cart</label>
        </NavLink>
        <NavLink to="/wishlist" className="navbar-item">
          <i className="fas fa-star"></i>
          <label className="navbar-item-label">Wishlist</label>
        </NavLink>
        <NavLink to="/users" className="navbar-item">
          <i className="fas fa-user"></i>
          <label className="navbar-item-label">Account</label>
        </NavLink>
      </nav>
    </>
  );
};
export default Footer;
