import React from "react";
import { FaCheck, FaTimes, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Solutions-pages.css";

export default function ComparisonTable() {
  const comparisonData = [
    {
      category: "SAP Integration",
      items: [
        { name: "SAP-native architecture", tads: true, legacy: false },
        { name: "Understands SAP transaction", tads: true, legacy: false },
        { name: "Role-aware policies", tads: true, legacy: false },
        { name: "Real-time SAP data inspection", tads: true, legacy: false },
      ],
    },
    {
      category: "Protection Capabilities",
      items: [
        { name: "Preventive blocking", tads: true, legacy: false },
        { name: "Content-aware classification", tads: true, legacy: false },
        { name: "AI/GenAI paste protection", tads: true, legacy: false },
        { name: "Cross-channel correlation", tads: true, legacy: false },
      ],
    },
    {
      category: "Deployment & Operations",
      items: [
        { name: "Agentless option available", tads: true, legacy: false },
        { name: "No endpoint software required", tads: true, legacy: false },
        { name: "Sub-1ms latency impact", tads: true, legacy: false },
        { name: "Cloud-native architecture", tads: true, legacy: false },
      ],
    },
  ];

  return (
    <section className="comparison-section">
      <div className="capabilities-header">
        <div className="sub-para-text security-label">
          <FaGlobe size={16} style={{ marginRight: "8px" }} /> Comparison
        </div>
        <h2 className="head-text">TADS vs Traditional DLP</h2>
      </div>

      <div className="comparison-table-container">
        {/* Sticky Header */}
        <div className="comp-header-row sticky-header">
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
