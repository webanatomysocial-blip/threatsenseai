import React from "react";
import { FaRegCheckCircle, FaRegTimesCircle, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Solutions-pages.css";

export default function ComparisonTable() {
  const comparisonData = [
    {
      category: "SAP-native architecture",
      items: [
        { name: "SAP-native architecture", tads: true, legacy: false },
        { name: "Understands SAP transactions", tads: true, legacy: false },
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
        { name: "Payment Workflows", tads: true, legacy: false },
        { name: "Expense Tracking", tads: true, legacy: false },
        { name: "Payment Workflows", tads: true, legacy: false },
        { name: "Expense Tracking", tads: true, legacy: false },
      ],
    },
  ];

  return (
    <section className="comparison-section">
      <div className="capabilities-header">
        {/* <div className="sub-para-text security-label">
           <FaGlobe size={16} style={{ marginRight: "4px" }} /> Comparison
         </div>
         <h2 className="head-text">TADS vs Traditional DLP</h2> */}
      </div>

      <div className="comparison-table-container">
        {/* Sticky Header */}
        <div className="comp-header-row">
          <div className="comp-cell col-capability header-cell-main">
            <h3 className="sub-head-text">Capability</h3>
          </div>
          <div className="comp-cell col-tads header-center">
            <span className="sub-head-text">TADS</span>
          </div>
          <div className="comp-cell col-legacy header-center">
            <span className="sub-head-text">Legacy DLP</span>
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
                      <FaRegCheckCircle className="icon-check-green" />
                    ) : (
                      <FaRegTimesCircle className="icon-times-red" />
                    )}
                  </div>
                  <div className="comp-cell col-legacy center-content">
                    {item.legacy ? (
                      <FaRegCheckCircle className="icon-check-green" />
                    ) : (
                      <FaRegTimesCircle className="icon-times-red" />
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
