import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import "./App.css"
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src = {require("./images/Fooda.png")} className="custom-image"   alt="" /> 
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
      <Breadcrumb style={{ color: "orange" }}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/menu">Menu</Breadcrumb.Item>
        <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
      </Breadcrumb>
      
    </>
  );
};

export default NavBar;