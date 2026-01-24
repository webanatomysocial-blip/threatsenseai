import React from "react";
import "../css/footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoWhite from "../assets/logo-white.png";
import AnimatedContent from "./AnimatedContent";

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
              Your data <br /> under control.
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
              <form className="newsletter-form">
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
                    <a
                      href="#"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
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
                    <a href="#" aria-label="X (Twitter)">
                      <FaXTwitter size={24} color="white" />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <FaLinkedin size={24} color="white" />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <FaInstagram size={24} color="white" />
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
                    <a
                      href="#"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Terms & Condition
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="para-text-white"
                      style={{ fontSize: "14px", color: "#999" }}
                    >
                      Accessibility Statement
                    </a>
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
            Copyright © 2026 ThreatSense. All Rights Reserved.
          </p>
          <p className="sub-para-text-white">
            Designed & Developed by{" "}
            <a
              href="https://webanatomy.in/"
              target="_blank"
              style={{ color: "grey", textDecoration: "none" }}
            >
              {" "}
              @Web Anatomy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
