import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaUniversity,
  FaUser,
  FaSignInAlt,
  FaBookOpen,
} from "react-icons/fa";
import "./Nav.css";

const Navbar = () => {
  const [loginDropdown, setLoginDropdown] = useState(false);

  return (
    <>
      {/* <div className="box1">info@example.com +208-6666-011</div> */}

      <nav className="navbar">
        <h1 class="it">Miracle IT</h1>

        <ul className="nav-center">
          <li>
            <Link to="/">
              <FaHome className="icon" /> Home
            </Link>
          </li>
            <li>
            <Link to="/courses">
              <FaBookOpen className="icon" /> Courses
                </Link>
               </li>
          <li>
            <Link to="/about">
              <FaInfoCircle className="icon" /> About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaPhone className="icon" /> Contact Us
            </Link>
          </li>
           
          {/* <li>
            <Link to="/admission">
              <FaUniversity className="icon" /> Admission
            </Link>
          </li> */}
        </ul>

        <ul className="nav-right">
          {/* <li>
            <Link to="/Dashboard">
              <FaUser className="icon" /> Dashboard
            </Link>
          </li> */}

          {/* ✅ Proper Login Dropdown */}
          <li className="login-dropdown">
            <button
              className="login-btn"
              onClick={() => setLoginDropdown(!loginDropdown)}
            >
              <FaSignInAlt className="icon" /> Login
            </button>
            <div className={`dropdown-menu ${loginDropdown ? "active" : ""}`}>
              <Link to="/login/student" className="dropdown-item">
                Student Login
              </Link>
              <Link to="/login/teacher" className="dropdown-item">
                Teacher Login
              </Link>
              {/* <Link to="/login/admin" className="dropdown-item">
                Admin Login
              </Link> */}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
