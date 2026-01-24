import React from "react";
import { FaCheck, FaTimes, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Solutions-pages.css";

export default function ComparisonTable() {
  const comparisonData = [
    {
      category: "SAP Integration",
      items: [
        { name: "Lorem ipsum dolor sit amet", tads: true, legacy: false },
        { name: "Consectetur adipiscing elit", tads: true, legacy: false },
        { name: "Sed do eiusmod tempor", tads: true, legacy: false },
        { name: "Incididunt ut labore et dolore", tads: true, legacy: false },
      ],
    },
    {
      category: "Protection Capabilities",
      items: [
        { name: "Magna aliqua ut enim ad minim", tads: true, legacy: false },
        { name: "Veniam quis nostrud exercitation", tads: true, legacy: false },
        { name: "Ullamco laboris nisi ut aliquip", tads: true, legacy: false },
        { name: "Ex ea commodo consequat", tads: true, legacy: false },
      ],
    },
    {
      category: "Deployment & Operations",
      items: [
        {
          name: "Duis aute irure dolor in reprehenderit",
          tads: true,
          legacy: false,
        },
        { name: "In voluptate velit esse cillum", tads: true, legacy: false },
        {
          name: "D dolore eu fugiat nulla pariatur",
          tads: true,
          legacy: false,
        },
        {
          name: "Excepteur sint occaecat cupidatat",
          tads: true,
          legacy: false,
        },
      ],
    },
  ];

  return (
    <section className="comparison-section">
      <div className="capabilities-header">
        <div className="sub-para-text security-label">
          <FaGlobe size={16} style={{ marginRight: "4px" }} /> Comparison
        </div>
        <h2 className="head-text">TADS vs Traditional DLP</h2>
      </div>

      <div className="comparison-table-container">
        {/* Sticky Header */}
        <div className="comp-header-row ">
          <div className="comp-cell col-capability header-cell-main">
            <h3 className="head-text" style={{ color: "var(--red-color)" }}>
              Capability
            </h3>
            <p
              className="sub-para-text"
              style={{ fontSize: "14px", margin: 0 }}
            >
              Find one that's right for you
            </p>
          </div>
          <div className="comp-cell col-tads header-center">
            <span className="brand-name">TADS</span>
            <Link to="/contact" className="white-button try-btn">
              Try for free
            </Link>
          </div>
          <div className="comp-cell col-legacy header-center">
            <span className="brand-name">Legacy DLP</span>
          </div>
        </div>

        {/* Rows */}
        <div className="comp-body">
          {comparisonData.map((section, sIndex) => (
            <React.Fragment key={sIndex}>
              {/* Section Header */}
              <div className="comp-section-row">
                <div className="comp-cell full-width">
                  <h4>{section.category}</h4>
                </div>
              </div>
              {/* Items */}
              {section.items.map((item, iIndex) => (
                <div className="comp-row" key={iIndex}>
                  <div className="comp-cell col-capability">
                    <span className="feature-name">{item.name}</span>
                  </div>
                  <div className="comp-cell col-tads center-content">
                    {item.tads ? (
                      <FaCheck className="icon-check-red" />
                    ) : (
                      <FaTimes className="icon-times-gray" />
                    )}
                  </div>
                  <div className="comp-cell col-legacy center-content">
                    {item.legacy ? (
                      <FaCheck className="icon-check-red" />
                    ) : (
                      <FaTimes className="icon-times-gray" />
                    )}
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
