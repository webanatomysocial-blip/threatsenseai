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
      title: "How does GenAI increase insider data leakage risk?",
      description:
        "Employees may unintentionally paste sensitive SAP or enterprise data into public AI tools for analysis, testing, or development. Once shared, that data can leave organizational control and may be retained or reused externally.",
      image: bannerImg,
    },
    {
      id: "02",
      title: "Why does traditional DLP fail to stop insider threats?",
      description:
        "Many legacy DLP tools focus only on endpoints or static rules. They often miss browser activity, SAP-specific transactions, screenshots, AI prompts, and context-based misuse.",
      image: bannerImg,
    },
    {
      id: "03",
      title: "Why is SAP data especially vulnerable?",
      description:
        "SAP stores highly sensitive financial, customer, HR, procurement, and operational data. Broad user access, exports, custom reports, and integrations can increase exposure if not governed properly.",
      image: bannerImg,
    },
    {
      id: "04",
      title: "How do screen sharing and screenshots cause data leaks?",
      description:
        "Sensitive data can be exposed during meetings, remote sessions, recordings, or captured screenshots. These actions often bypass traditional monitoring controls.",
      image: bannerImg,
    },
    {
      id: "05",
      title: "Why is real-time prevention critical for data protection?",
      description:
        "Once sensitive data is copied, exported, or uploaded, remediation becomes difficult. Real-time prevention stops risky actions before data leaves the environment.",
      image: bannerImg,
    },
    {
      id: "06",
      title: "Can ThreatSense AI work with SAP S/4HANA and ECC?",
      description:
        "Yes, the suite is designed to support SAP ECC, S/4HANA, HANA, and hybrid enterprise environments.",
      image: bannerImg,
    },
    {
      id: "07",
      title: "Does it help with GDPR and DPDPA compliance?",
      description:
        "Yes, the platform supports privacy governance, audit evidence, retention controls, and monitoring aligned with major regulatory frameworks.",
      image: bannerImg,
    },
  ];

  return (
    <div className="accordion-section">
      <div className="accordion-container">
        <div className="accordion-content-side">
          <div className="accordion-list">
            {threatData.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${activeAccordion === index ? "active" : ""
                  }`}
              >
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                >
                  <div className="accordion-header-content">
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
                    <p className="sub-para-text accordion-body-text">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="accordion-image-side">
          <div className="accordion-header-group">
            <div className="sub-para-text security-label d-flex-col">
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaGlobe size={16} style={{ marginRight: "4px" }} /> Frequently Asked Questions
              </div>
              <h2 className="head-text">
                Common Questions About Data Leaks, AI Risk & SAP Protection
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
