import React from "react";
import '../App.css';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const state = useSelector((state)=>state.handleCart)
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-2 shadow-sm" style={{background:'#DAEAF1'}}>
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          SHOPPYS
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active " aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul>
     <div className="button">
     <NavLink to="/Login" className="btn btn-outline-dark me-2">
       <i className="fa fa-sign-in me-2"></i>Login
       </NavLink>
     <NavLink to="/Register" className="btn btn-outline-dark m-2">
       <i className="fa fa-user-plus me-1"></i>Register
       </NavLink>
     <NavLink to="/Cart" className="btn btn-outline-dark me-2">
       <i className="fa fa-shopping-cart me-2"></i>Cart ({state.length})
       </NavLink>
     </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
