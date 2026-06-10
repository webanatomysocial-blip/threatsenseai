import React from "react";
import "../css/footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
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
          <div className="footer-top-left">
            <h2 className="footer-heading">
              Your data <br /> under control.
            </h2>
            <p className="footer-description">
              ThreatSenseAI is revolutionizing cybersecurity by seamlessly
              integrating advanced SIEM and SOAR capabilities into one powerful
              solution.
            </p>
          </div>

          <div className="footer-top-right">
            <span className="social-label">Social</span>
            <div className="social-icons">
              <a
                href="https://twitter.com/ThreatSenseAI"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={24} color="white" />
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
                href="https://www.instagram.com/threatsenseai"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={24} color="white" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <a href="https://tidycal.com/threatsenseai/">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Solutions</h4>
            <ul className="footer-links">
              <li>
                <Link to="/solutions/audit-trail-enforcer" className="red-link">
                  Audit Trail Enforcer
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/threatsenseai-data-security"
                  className="red-link"
                >
                  ThreatSense AI Data Security
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/threatsenseai-data-security/tads-protect"
                  className="white-link"
                >
                  TADS Protect
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/threatsenseai-data-security/dot-layer"
                  className="white-link"
                >
                  DotLayer
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/threatsenseai-data-security/dmss"
                  className="white-link"
                >
                  DMSS
                </Link>
              </li>

              <li>
                <Link
                  to="/solutions/threatsenseai-data-security/dprm"
                  className="white-link"
                >
                  DPRM
                </Link>
              </li>
              <li>
                <Link to="/solutions/threatops-for-sap" className="red-link">
                  ThreatOps for SAP
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <div className="footer-sub-group">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/case-studies">Case Studies</Link>
                </li>
              </ul>
            </div>

            <div className="footer-sub-group" style={{ marginTop: "40px" }}>
              <h4>Partner</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/become-a-partner">Become a patner</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <h4>Legal & Compliance</h4>
            <ul className="footer-links">
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms & Condition</Link>
              </li>
              <li>
                <Link to="/cookie-policy">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/accessibility-statement">
                  Accesibility Statement
                </Link>
              </li>
            </ul>
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
          <p className="copyright-text">
            Copyright © {new Date().getFullYear()} ThreatSense AI. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
