import React from "react";
import "../css/footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import logoWhite from "../assets/logo-white.png";
import AnimatedContent from "./AnimatedContent";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power2.out"
        initialOpacity={0.1}
        animateOpacity
        threshold={0.01}
        delay={0.3}
      >
        <div className="footer-top">
          <div className="footer-left">
            <h2 className="head-text-white" style={{ marginBottom: "20px" }}>
              Your data <br /> under control
            </h2>

            <p
              className="para-text-white"
              style={{ maxWidth: "400px", color: "#ccc" }}
            >
              ThreatSense AI helps enterprises protect sensitive data from
              insider threats, misuse, and breaches by combining cybersecurity,
              data security, and automated response into a single platform
            </p>
          </div>

          <div className="footer-right">
            <div className="newsletter-section">
              <label className="sub-para-text-white">
                Subscribe to our Newsletter
              </label>

              <form
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  className="newsletter-input"
                />
                <button
                  type="submit"
                  className="white-button"
                  style={{ borderRadius: "50px", padding: "10px 24px" }}
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="footer-links-container">
              <div className="footer-column">
                <h4 className="sub-para-text-white" style={{ fontWeight: 600 }}>
                  Main Pages
                </h4>

                <ul className="footer-links">
                  <li>
                    <Link
                      to="/"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/#solutions"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Solutions
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/about"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/blogs"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Blogs
                    </Link>
                  </li>

                  <li>
                    <a
                      href="https://tidycal.com/threatsenseai/"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>

                <div className="footer-socials">
                  <span
                    className="sub-para-text-white"
                    style={{ display: "block", marginBottom: "10px" }}
                  >
                    Social
                  </span>

                  <div className="social-icons">
                    <a
                      href="https://www.facebook.com/profile.php?id=61587549253422"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="face book"
                    >
                      <FaFacebook size={24} color="white" />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/threatsenseai/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={24} color="white" />
                    </a>

                    <a
                      href="https://www.youtube.com/channel/UCgCFk__RE-IMMdfKRc0UATA"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="youtube"
                    >
                      <FaYoutube size={24} color="white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="footer-column">
                <h4 className="sub-para-text-white" style={{ fontWeight: 600 }}>
                  Resources
                </h4>

                <ul className="footer-links">
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/terms-and-conditions"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Terms & Conditions
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/cookie-policy"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Cookie Policy
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/accessibility-statement"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Accessibility Statement
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      <div className="footer-bottom">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power2.out"
          initialOpacity={0.1}
          animateOpacity
          threshold={0.01}
          delay={0.3}
        >
          <div className="footer-logo-container">
            <img
              src={logoWhite}
              alt="ThreatSenseAI"
              className="footer-logo-img"
            />
            <div className="footer-logo-img-overlay"></div>
          </div>
        </AnimatedContent>

        <div className="footer-credits">
          <p className="sub-para-text-white">
            All Rights Reserved @ThreatSenseAi LLP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
