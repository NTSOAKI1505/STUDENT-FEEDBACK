import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <h1>Student Feedback Management System</h1>
        <p>Empowering Students, Lecturers, and Admins to Connect and Improve Learning</p>

        {/* Get Started Button */}
        <div className="dashboard-buttons">
          <Link to="/login" className="btn btn-login">
            Get Started
          </Link>
        </div>
      </header>

      {/* Role Cards Section */}
      <div className="dashboard-grid">
        <Link to="/student" className="dashboard-card student">
          <h2>Student</h2>
          <p>Submit feedback and view your previous submissions</p>
        </Link>

        <Link to="/lecturer" className="dashboard-card lecturer">
          <h2>Lecturer</h2>
          <p>View and analyze feedback from students</p>
        </Link>

        <Link to="/admin" className="dashboard-card admin">
          <h2>Administrator</h2>
          <p>Manage users and monitor system performance</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
