import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="simple-footer">
      <p>© {new Date().getFullYear()} Student Feedback System | Limkokwing University</p>
    </footer>
  );
};

export default Footer;
