import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) onSearch(value);
  };

  const handleLogoClick = () => {
    setSearchValue("");
    if (onSearch) onSearch("");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header-container-new">
        <div className="header-left">
          <Link to="/" className="header-logo" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="ThreatSenseAI"
              className="logo-img"
              width="168"
              height="55"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="header-nav only-windows">
          <Link to="/solutions" className="nav-link">
            Solutions
          </Link>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          <Link to="/blogs" className="nav-link">
            Blog
          </Link>
        </nav>

        {/* Desktop Right */}
        <div className="header-right only-windows">
          <Link to="/contact" className="black-button">
            Free Consultation
          </Link>
        </div>

        {/* Mobile Hamburger / Close Button */}
        <div
          className={`mobile-menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>

        {/* Mobile Overlay Menu */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <Link to="/" className="header-logo" onClick={handleLogoClick}>
              <img
                src={logo}
                alt="ThreatSenseAI"
                className="logo-img"
                width="168"
                height="55"
              />
            </Link>
          </div>

          <div className="mobile-menu-links">
            <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>
              Homepage
            </Link>
            <Link
              to="/solutions"
              className="mobile-nav-link"
              onClick={toggleMenu}
            >
              Solutions
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/blogs" className="mobile-nav-link" onClick={toggleMenu}>
              Blog
            </Link>
            <Link
              to="/contact"
              className="mobile-nav-link"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="black-button mobile-cta-btn"
              onClick={toggleMenu}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
