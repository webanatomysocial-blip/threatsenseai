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
      title: "Lorem ipsum dolor sit amet",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: bannerImg,
    },
    {
      id: "02",
      title: "Duis aute irure dolor",
      description:
        "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: bannerImg,
    },
    {
      id: "03",
      title: "Sed ut perspiciatis unde",
      description:
        "Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: bannerImg,
    },
    {
      id: "04",
      title: "Nemo enim ipsam voluptatem",
      description:
        "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      image: bannerImg,
    },
    {
      id: "05",
      title: "Ut enim ad minima veniam",
      description:
        "Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
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
