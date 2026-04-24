import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

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
          <div className="nav-link-container solutions-dropdown-wrapper">
            <Link to="/#solutions" className="nav-link dropdown-trigger">
              Solutions <IoIosArrowDown className="dropdown-arrow" />
            </Link>
            <div className="dropdown-menu">
              <Link to="/audit-trail-enforcer" className="dropdown-item">
                Audit Trail Enforcer
              </Link>
              <Link to="/threatsenseai-data-security" className="dropdown-item">
                ThreatSense AI Data Security
              </Link>
              <Link to="/threatops-for-sap" className="dropdown-item">
                ThreatOps for SAP
              </Link>
            </div>
          </div>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          <Link to="/blogs" className="nav-link">
            Blogs
          </Link>
          <Link to="/become-a-partner" className="nav-link">
            Become a Partner
          </Link>
        </nav>

        {/* Desktop Right */}
        <div className="header-right only-windows">
          <a href="https://tidycal.com/threatsenseai/" className="black-button">
            Contact Us
          </a>
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
              Home
            </Link>
            <div
              className={`mobile-solutions-wrapper ${isSolutionsOpen ? "active" : ""}`}
            >
              <div className="mobile-nav-link solutions-trigger">
                <Link
                  to="/#solutions"
                  className="mobile-nav-link-text"
                  onClick={toggleMenu}
                >
                  Solutions
                </Link>
                <div
                  className="mobile-arrow-wrapper"
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                >
                  <IoIosArrowDown
                    className={`mobile-arrow ${isSolutionsOpen ? "rotated" : ""}`}
                  />
                </div>
              </div>
              <div
                className={`mobile-dropdown ${isSolutionsOpen ? "open" : ""}`}
              >
                <Link
                  to="/audit-trail-enforcer"
                  className="mobile-dropdown-link"
                  onClick={toggleMenu}
                >
                  Audit Trail Enforcer
                </Link>
                <Link
                  to="/threatsenseai-data-security"
                  className="mobile-dropdown-link"
                  onClick={toggleMenu}
                >
                  ThreatSense AI Data Security
                </Link>
                <Link
                  to="/threatops-for-sap"
                  className="mobile-dropdown-link"
                  onClick={toggleMenu}
                >
                  ThreatOps for SAP   
                </Link>
              </div>
            </div>
            <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/blogs" className="mobile-nav-link" onClick={toggleMenu}>
              Blogs
            </Link>
            <a
              href="https://tidycal.com/threatsenseai/"
              className="mobile-nav-link"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
