import React, { useState, useEffect } from "react";
import { Router , Route ,NavLink, Switch } from "react-router-dom";
import axios from "axios";
// import Electronics from "./Electronics";


const Categories = () => {
  return (
    <>
      <div className="categories">
        <NavLink to="/electronics" className="navbar-item">
          <i className="fas fa-laptop"></i>
          <label className="navbar-item-label">Electronics</label>
        </NavLink>
        <NavLink to="/clothes" className="navbar-item">
          <i className="fas fa-tshirt"></i>
          <label className="navbar-item-label">Clothes</label>
        </NavLink>
        <NavLink to="/homes" className="navbar-item">
          <i className="fas fa-house-user"></i>
          <label className="navbar-item-label">Home</label>
        </NavLink>
        <NavLink to="/garden" className="navbar-item">
          <i className="fas fa-tree"></i>
          <label className="navbar-item-label">Garden</label>
        </NavLink>
        <NavLink to="/store" className="navbar-item">
          <i className="fas fa-store"></i>
          <label className="navbar-item-label">Store</label>
        </NavLink>
        <NavLink to="/childStore" className="navbar-item">
          <i className="fas fa-child"></i>
          <label className="navbar-item-label">Child</label>
        </NavLink>
        <NavLink to="/beauty" className="navbar-item">
          <i className="fas fa-grin-stars"></i>
          <label className="navbar-item-label">Beauty</label>
        </NavLink>
        <NavLink to="/healthy" className="navbar-item">
          <i className="fas fa-first-aid"></i>
          <label className="navbar-item-label">Healthy</label>
        </NavLink>
        <NavLink to="/books" className="navbar-item">
          <i className="fas fa-book-open"></i>
          <label className="navbar-item-label">Books</label>
        </NavLink>
        <NavLink to="/sport" className="navbar-item">
          <i className="fas fa-volleyball-ball"></i>
          <label className="navbar-item-label">Sport</label>
        </NavLink>
        <NavLink to="/automotive" className="navbar-item">
          <i className="fas fa-truck-monster"></i>
          <label className="navbar-item-label">Automotive</label>
          <div className="navbar-item-color"></div>
        </NavLink>
        <NavLink to="/adds" className="navbar-item">
          <i className="fas fa-ad"></i>
          <label className="navbar-item-label">Adds</label>
        </NavLink>
            </div>
            
    </>
  );
};
export default Categories;
