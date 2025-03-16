import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>PAMS BEAUTY SALOON</h3>
        <p>Bringing out the beauty in you!</p>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="footer-text">© 2025 PAMS BEAUTY SALOON. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
