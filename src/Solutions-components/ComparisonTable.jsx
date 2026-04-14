import React from "react";
import { FaCheckCircle, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/ComparisonTable.css";

const plans = [
  {
    name: "Starter",
    description: "Organizations needing core endpoint DLP protection",
  },
  {
    name: "Emerging",
    description: "Companies requiring contextual access control and stronger endpoint governance",
  },
  {
    name: "Enterprise",
    description: "Enterprises needing SAP-specific data protection and insider threat monitoring",
  },
];

const features = [
  { name: "Download restrictions", values: [true, true, true] },
  { name: "USB device control / USB locking", values: [true, true, true] },
  { name: "Remote device locking", values: [true, true, true] },
  { name: "Remote device wipe", values: [true, true, true] },
  { name: "URL / website blocking", values: [true, true, true] },
  { name: "Wi-Fi network restrictions", values: [true, true, true] },
  { name: "Basic device monitoring dashboard", values: [true, true, true] },
  { name: "Policy-based endpoint security controls", values: [true, true, true] },
  { name: "Time-bound login controls", values: [false, true, true] },
  { name: "Location-based login restrictions (Lat/Long)", values: [false, true, true] },
  { name: "Attribute-based login policies", values: [false, true, true] },
  { name: "Application-specific access controls", values: [false, true, true] },
  { name: "Context-aware security policies", values: [false, true, true] },
  { name: "Centralized policy management", values: [true, true, true] },
  { name: "SAP transaction access monitoring", values: [false, false, true] },
  { name: "SAP sensitive data download monitoring", values: [false, false, true] },
  { name: "SAP table extraction monitoring", values: [false, false, true] },
  { name: "SAP report / ALV data export control", values: [false, false, true] },
  { name: "SAP user behaviour (UBA) monitoring", values: [false, false, true] },
  { name: "Enterprise SAP data protection dashboard", values: [false, false, true] },
];

export default function ComparisonTable() {
  return (
    <section className="ct-section">
      {/* Header */}
      <div className="ct-header">
        <div
          className="security-label"
          style={{ justifyContent: "center", marginBottom: "14px" }}
        >
          <FaGlobe size={16} style={{ marginRight: "6px" }} /> Comparison
        </div>
        <h2 className="head-text">
          Select the pricing plan <br /> that best suits your needs.
        </h2>
      </div>

      {/* Table Card */}
      <div className="ct-card">

        {/* Column Header Row */}
        <div className="ct-row ct-header-row">
          <div className="ct-col ct-feature-col ct-col-label">Feature</div>
          {plans.map((plan, i) => (
            <div key={i} className="ct-col ct-plan-col ct-col-label">
              {plan.name}
            </div>
          ))}
        </div>

        {/* Best fit for */}
        <div className="ct-row">
          <div className="ct-col ct-feature-col">Best fit for</div>
          {plans.map((plan, i) => (
            <div key={i} className="ct-col ct-plan-col ct-desc-cell">
              {plan.description}
            </div>
          ))}
        </div>

        {/* Feature Rows */}
        {features.map((feature, fi) => (
          <div key={fi} className="ct-row">
            <div className="ct-col ct-feature-col">{feature.name}</div>
            {feature.values.map((val, vi) => (
              <div key={vi} className="ct-col ct-plan-col ct-icon-cell">
                {val ? (
                  <FaCheckCircle className="ct-check-icon" />
                ) : (
                  <span className="ct-dash">—</span>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* CTA Row */}
        <div className="ct-row ct-cta-row">
          <div className="ct-col ct-feature-col ct-cta-label">·</div>
          {plans.map((_, i) => (
            <div key={i} className="ct-col ct-plan-col ct-cta-cell">
              <a href="https://tidycal.com/threatsenseai/"  className="ct-cta-btn">
                Contact Sales
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
