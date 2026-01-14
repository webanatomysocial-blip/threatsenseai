import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) onSearch(value);
  };

  const handleLogoClick = () => {
    setSearchValue("");
    if (onSearch) onSearch("");
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

        <nav className="header-nav only-windows">
          <Link to="/solutions" className="nav-link">
            Solutions
          </Link>
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
          <Link to="/blogs" className="nav-link">
            Blogs
          </Link>
        </nav>

        <div className="header-right only-windows">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="black-button"
          >
            Get Featured
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
