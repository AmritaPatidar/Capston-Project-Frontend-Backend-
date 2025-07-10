import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaClock, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* Top CTA Box */}
      <div className="cta-box">
        <div className="cta-content">
          <p className="cta-label"></p>
          <h2>We Take Care Of Your Technology</h2>
        
        </div>
      </div>

      {/* Main Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col about">
            <h2 className="footer-logo">Miracle It</h2>
            <p>
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis
            </p>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>

          <div className="footer-col">
            <h3>IT Solution</h3>
            <ul>
              <li> IT Management</li>
              <li> SEO Optimization</li>
              <li> Web Development</li>
              <li> Cyber Security</li>
              <li> Data Security</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Quick Link</h3>
            <ul>
              <li>About Miracle</li>
              <li> Our Services</li>
              <li> Pricing Plan</li>
              <li> Our Projects</li>
              <li>Our Team</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p><FaClock /> <strong>Opening Hours:</strong><br />Mon – Sat: 10.00 AM – 4.00 PM</p>
            <p><FaPhone /> <strong>Phone Call:</strong><br />208–6666–0112, 308–5555–0113</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
