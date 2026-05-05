import React, { useState } from "react";
import "../css/FAQ.css";
import { AiFillFileText, AiOutlinePlus } from "react-icons/ai";

export default function FAQ({ title, description, items, paddingBottom, isBlog }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const displayTitle = title || "Frequently asked questions";
  const displayItems = items || [];

  return (
    <div 
      className={isBlog ? "" : "faq-container"} 
      style={{ paddingBottom: paddingBottom, background: isBlog ? "transparent" : undefined, padding: isBlog ? "0px" : undefined }}
    >
      <div 
        className={isBlog ? "" : "faq-border-wrapper"} 
        style={{ display: isBlog ? "block" : "flex", border: isBlog ? "none" : undefined }}
      >
        {!isBlog && (
          <div className="faq-left">
            <div className="sub-para-text faq-label">
              <AiFillFileText color="#000" style={{ marginRight: "4px" }} />{" "}
              Frequently Asked Questions
            </div>
            <h1 className="head-text">{displayTitle}</h1>
            {description && <p className="para-text">{description}</p>}
          </div>
        )}

        <div className={isBlog ? "" : "faq-right"} style={{ background: isBlog ? "transparent" : undefined }}>
          {displayItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-header"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                style={isBlog ? { padding: "20px 0px", fontWeight: 500, border: "none", background: "none" } : {}}
              >
                <div 
                  className="faq-header-content" 
                  style={isBlog ? { justifyContent: "space-between", flexDirection: "row-reverse", width: "100%", transform: "none" } : {}}
                >
                  <div className="faq-plus-icon">
                    <AiOutlinePlus />
                  </div>
                  <span className="faq-question" style={isBlog ? { fontWeight: 500 } : {}}>{item.question}</span>
                </div>
              </button>
              <div className="faq-answer-wrapper" style={isBlog ? { padding: "0px" } : {}}>
                <div className="faq-answer" style={isBlog ? { paddingLeft: "0px" } : {}}>
                  {typeof item.answer === "string" ? (
                    item.answer.split("\n").map((line, i) => (
                      <p key={i} style={{ marginBottom: line ? "10px" : "20px" }}>
                        {line}
                      </p>
                    ))
                  ) : (
                    item.answer
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
