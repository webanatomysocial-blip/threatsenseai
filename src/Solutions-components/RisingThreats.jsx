import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import "../css/Solutions-pages.css"; // Ensure it uses the new CSS
import bannerImg from "../assets/about-images/banner.jpg";

export default function RisingThreats() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const threatData = [
    {
      id: "01",
      title: '"SAP is secure by default"',
      description:
        "REALITY: SAP provides robust transaction security, but data export channels (reports, downloads, API calls) remain largely uncontrolled. Users with legitimate access can extract sensitive data unmonitored.",
      image: bannerImg,
    },
    {
      id: "02",
      title: '"Our DLP covers SAP data"',
      description:
        "REALITY: Generic DLP tools struggle with SAP's proprietary protocols and data structures, often missing critical context or generating high false positives.",
      image: bannerImg,
    },
    {
      id: "03",
      title: '"Role-based access is enough"',
      description:
        "REALITY: Roles define what users can do, not what they actually do. Excessive authorizations and segregation of duty (SoD) conflicts are common, leaving gaps for exploitation.",
      image: bannerImg,
    },
    {
      id: "04",
      title: '"We monitor SAP with SIEM"',
      description:
        "REALITY: SIEMs often lack deep visibility into SAP-specific logs and business logic, leading to blind spots in threat detection within the SAP landscape.",
      image: bannerImg,
    },
    {
      id: "05",
      title: '"Encryption protects our data"',
      description:
        "REALITY: Encryption protects data at rest and in transit, but once authorized users access it, they can often extract it in clear text. Additional controls are needed for data in use.",
      image: bannerImg,
    },
  ];

  return (
    <div className="accordion-section">
      <div className="accordion-header-group">
        <div className="sub-para-text security-label d-flex-col">
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaGlobe size={16} style={{ marginRight: "4px" }} /> Rising Threat
            Vector
          </div>
          <h2 className="head-text">AI & Insider Data Exfiltration</h2>
        </div>
      </div>

      <div className="accordion-container">
        <div className="accordion-content-side">
          <div className="accordion-list">
            {threatData.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${
                  activeAccordion === index ? "active" : ""
                }`}
              >
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                >
                  <div className="accordion-header-content">
                    {/* Numbering logic if needed, or just layout */}
                    <span
                      className="accordion-title"
                      style={{
                        marginRight: "10px",
                        fontWeight: "600",
                        color: activeAccordion === index ? "#ff5400" : "#999",
                      }}
                    >
                      {item.id}
                    </span>
                    <span className="accordion-title">{item.title}</span>
                    <div style={{ marginLeft: "auto" }}>
                      <div className="accordion-plus-icon">
                        <AiOutlinePlus />
                      </div>
                    </div>
                  </div>
                </button>

                <div className="accordion-body-wrapper">
                  <div className="accordion-body">
                    <p
                      className="sub-para-text"
                      style={{ paddingLeft: "40px" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="accordion-image-side">
          <img
            src={
              activeAccordion !== null
                ? threatData[activeAccordion].image
                : bannerImg
            } // Fallback or active image
            alt="Rising Threats"
            className="accordion-image"
          />
        </div>
      </div>
    </div>
  );
}
