import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        <p>Contact: support@yourcompany.com</p>
      </div>
      <div className="footer-right">
        <a href="/terms" className="footer-link">Terms of Service</a>
        <a href="/privacy" className="footer-link">Privacy Policy</a>
        <a href="/faq" className="footer-link">FAQ</a>
      </div>
    </footer>
  );
};

export default Footer;
