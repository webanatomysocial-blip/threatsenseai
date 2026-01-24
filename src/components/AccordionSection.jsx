import { useState } from "react";
import "../css/AccordionSection.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import bgImage from "../assets/home/Our-Solutions/bg1.png";

const AccordionSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const capabilities = [
    {
      title: "Comprehensive Coverage",
      description:
        "Utilizes AI-driven analytics to differentiate between legitimate activities and actual threats, reducing false alarms.",
    },
    {
      title: "Identity & Access Protection",
      description:
        "Continuously monitors user activities, detects anomalies, and automatically blocks suspicious actions.",
    },
    {
      title: "Accurate Risk Detection",
      description:
        "Utilizes AI-driven analytics to differentiate between legitimate activities and actual threats, reducing false alarms.",
    },
    {
      title: "Standardized Compliance",
      description:
        "Enforces strict security policies, ensuring alignment with industry regulations and best practices.",
    },
    {
      title: "lorem ipsum",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];

  return (
    <div className="accordion-section">
      <div className="accordion-header-group">
        <div className="sub-para-text security-label d-flex">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaGlobe size={16} style={{ marginRight: "4px" }} />
            Capabilities
          </div>
          <div>
            <h2 className="head-text">What it brings?</h2>
          </div>
        </div>

        <div style={{ alignItems: "center" }} className="d-flex">
          <p className="sub-para-text">
            Our AI-powered isn't just about tracking, it's about transforming
            the way you train, recover, and perform.
          </p>
        </div>
      </div>

      <div className="accordion-container">
        <div className="accordion-content-side">
          <div className="accordion-list">
            {capabilities.map((item, index) => (
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
                    <div className="accordion-plus-icon">
                      <AiOutlinePlus />
                    </div>
                    <span className="accordion-title">{item.title}</span>
                  </div>
                </button>

                <div className="accordion-body-wrapper">
                  <div className="accordion-body">
                    <p className="sub-para-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Red Button if requested, but image doesn't show it. Prompt said 'use red-button'. */}
          {/* <div style={{ marginTop: "30px" }}>
            <a href="#" className="red-button">
              Book A Free Demo
            </a>
          </div> */}
        </div>
        <div className="accordion-image-side">
          <img src={bgImage} alt="Capabilities" className="accordion-image" />
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
