import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import "../css/Solutions-pages.css"; // Ensure it uses the new CSS
import bannerImg from "../assets/about-images/banner.jpg";
import bannerVideo from "../assets/about-images/banner1.mp4";

export default function RisingThreats() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const threatData = [
    {
      id: "01",
      title: "How does Gen-AI increase insider data leakage risk?",
      description:
        "Employees can unknowingly paste sensitive SAP or enterprise data into public Gen-AI tools for testing, analysis, or development. Once shared, this data leaves organizational control and may be stored or reused externally.",
      image: bannerImg,
    },
    {
      id: "02",
      title: "Why does traditional DLP fail to stop insider threats?",
      description:
        "Traditional DLP relies on static rules and file-based controls. It cannot detect real-time typing, contextual user intent, or data shared directly via browsers, AI tools, or screen actions.",
      image: bannerImg,
    },
    {
      id: "03",
      title: "Why is SAP data especially vulnerable?",
      description:
        "SAP exposes critical business data directly on screens. Copying, screenshots, printing, or screen sharing can leak sensitive information without creating files bypassing most traditional security tools.",
      image: bannerImg,
    },
    {
      id: "04",
      title: "How do screen sharing and screenshots cause data leaks?",
      description:
        "Modern collaboration tools allow sensitive data to be shared visually. Most DLP tools cannot detect or block screenshots or live screen sharing of protected applications.",
      image: bannerImg,
    },
    {
      id: "05",
      title: "Why is real-time prevention critical for data protection?",
      description:
        "Once data is copied, uploaded, or shared with AI tools, it cannot be recalled. Real-time enforcement is the only way to stop insider leaks before data leaves the organization.",
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
          <div className="accordion-header-group">
        <div className="sub-para-text security-label d-flex-col">
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaGlobe size={16} style={{ marginRight: "4px" }} /> Rising Threat Vector
          </div>
          <h2 className="head-text">AI & Insider Data Exfiltration</h2>
        </div>
      </div>

        </div>
      </div>
    </div>
  );
}
