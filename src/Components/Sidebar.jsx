// src/components/Sidebar.js
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaHome, FaUser, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-light">
      <div className="profile text-center py-4">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-image rounded-circle"
        />
        <h4 className="mt-3">Alex Smith</h4>
        <div className="social-icons d-flex justify-content-center mt-2">
          <a href="#" className="text-light mx-2">
            <FaFacebook />
          </a>
          <a href="#" className="text-light mx-2">
            <FaInstagram />
          </a>
          <a href="#" className="text-light mx-2">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="links">
        <a href="#home" className="d-block py-2 px-3 text-light">
          <FaHome className="me-2" />
          Home
        </a>
        <a href="#about" className="d-block py-2 px-3 text-light">
          <FaUser className="me-2" />
          About
        </a>
        <a href="#resume" className="d-block py-2 px-3 text-light">
          <FaFileAlt className="me-2" />
          Resume
        </a>
        <a href="#contact" className="d-block py-2 px-3 text-light">
          <FaEnvelope className="me-2" />
          Contact
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
