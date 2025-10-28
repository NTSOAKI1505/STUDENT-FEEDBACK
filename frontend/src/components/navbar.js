// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Student Feedback App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback-form">Feedback Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback-list">Feedback List</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

