import React from "react";
import "../styles/Footer.css"; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            At <strong>DriveWell Driving School</strong>, we are committed to 
            providing high-quality driving lessons to help you master the road 
            and become a confident driver. Safety is our priority!
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p><i className="fas fa-map-marker-alt"></i> 123 Main Street, Your City, Your State</p>
          <p><i className="fas fa-phone"></i> +1 234 567 890</p>
          <p><i className="fas fa-envelope"></i> contact@drivewell.com</p>
        </div>

        {/* Services Section */}
        <div className="footer-section services">
          <h2>Our Services</h2>
          <ul>
            <li>Beginner Driving Lessons</li>
            <li>Advanced Driving Courses</li>
            <li>License Test Preparation</li>
            <li>Defensive Driving</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="footer-social">
        <p>Follow us:</p>
        <div className="social-icons">
          <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 DriveWell Driving School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
