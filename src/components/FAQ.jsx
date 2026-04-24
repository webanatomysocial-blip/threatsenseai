import React, { useState } from "react";
import "../css/FAQ.css";
import { AiFillFileText, AiOutlinePlus } from "react-icons/ai";

export default function FAQ({ title, description, items, paddingBottom }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const displayTitle = title || "Frequently asked questions";
  const displayItems = items || [];

  return (
    <div className="faq-container" style={{ paddingBottom: paddingBottom }}>
      <div className="faq-border-wrapper">
        <div className="faq-left">
          <div className="sub-para-text faq-label">
            <AiFillFileText color="#000" style={{ marginRight: "4px" }} />{" "}
            Frequently Asked Questions
          </div>
          <h1 className="head-text">{displayTitle}</h1>
          {description && <p className="para-text">{description}</p>}
        </div>

        <div className="faq-right">
          {displayItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-header"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <div className="faq-header-content">
                  <div className="faq-plus-icon">
                    <AiOutlinePlus />
                  </div>
                  <span className="faq-question">{item.question}</span>
                </div>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  {item.answer.split("\n").map((line, i) => (
                    <p key={i} style={{ marginBottom: line ? "10px" : "20px" }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
