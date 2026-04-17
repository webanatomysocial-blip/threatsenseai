import React from "react";
import { FaCheckCircle, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/ComparisonTable.css";

const plans = [
  {
    name: "Protect",
    includes: "Essential SAP Data Protection",
    scope: "Core SAP DLP",
  },
  {
    name: "Advanced",
    includes: "Integrated Data Protection",
    scope: "Protect + Browser Security + DMSS",
  },
  {
    name: "Enterprise",
    includes: "Unified Enterprise Data Security",
    scope: "Full Suite + DPRM",
  },
];

const features = [
  { name: "SAP data leak prevention policies", values: [true, true, true] },
  { name: "Sensitive download monitoring", values: [true, true, true] },
  { name: "SAP report / ALV export control", values: [true, true, true] },
  { name: "Table extraction monitoring", values: [true, true, true] },
  { name: "Policy-based blocking & warnings", values: [true, true, true] },
  { name: "Centralized policy management", values: [true, true, true] },
  { name: "Basic dashboards & reporting", values: [true, true, true] },
  { name: "Browser copy / paste control", values: [false, true, true] },
  { name: "Browser upload restriction", values: [false, true, true] },
  { name: "Browser print / screenshot controls", values: [false, true, true] },
  { name: "Browser AI prompt protection", values: [false, true, true] },
  { name: "Dot Layer agentless browser security", values: [false, true, true] },
  { name: "Data masking for non-production systems", values: [false, true, true] },
  { name: "Data scrambling for test environments", values: [false, true, true] },
  { name: "Dynamic masking in live access scenarios", values: [false, true, true] },
  { name: "Advanced analytics & risk trends", values: [false, true, true] },
  { name: "User behaviour analytics (UBA)", values: [false, false, true] },
  { name: "Insider risk monitoring", values: [false, false, true] },
  { name: "Privacy rights request workflows", values: [false, false, true] },
  { name: "Consent management controls", values: [false, false, true] },
  { name: "Retention & deletion governance", values: [false, false, true] },
  { name: "Cross-border transfer governance", values: [false, false, true] },
  { name: "GDPR / DPDPA / CCPA reporting", values: [false, false, true] },
  { name: "Executive command center dashboard", values: [false, false, true] },
  { name: "SIEM / SOAR integration", values: [false, false, true] },
  { name: "Custom workflows & APIs", values: [false, false, true] },
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
          Choose the Right Deployment Model
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

        {/* Includes Row */}
        <div className="ct-row ct-sub-header">
          <div className="ct-col ct-feature-col">Includes</div>
          {plans.map((plan, i) => (
            <div key={i} className="ct-col ct-plan-col ct-desc-cell">
              {plan.includes}
            </div>
          ))}
        </div>

        {/* Solution Scope Row */}
        <div className="ct-row ct-sub-header">
          <div className="ct-col ct-feature-col">Solution Scope</div>
          {plans.map((plan, i) => (
            <div key={i} className="ct-col ct-plan-col ct-desc-cell">
              {plan.scope}
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
              <a href="https://tidycal.com/threatsenseai/" className="ct-cta-btn">
                Contact Sales
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
