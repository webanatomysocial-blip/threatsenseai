import React, { useState } from "react";
import "../css/FAQ.css";
import { AiFillFileText, AiOutlinePlus } from "react-icons/ai";

const faqData = [
  {
    question: "How does ThreatSenseAI detect SAP threats in real-time?",
    answer:
      "ThreatSenseAI uses advanced AI and machine learning algorithms to monitor SAP system logs and network traffic constantly. It identifies patterns indicative of threats and alerts security teams instantly.",
  },
  {
    question: "Does it integrate with ServiceNow and MS Teams?",
    answer:
      "Yes, ThreatSenseAI offers seamless integration with popular ITSM and collaboration tools like ServiceNow and MS Teams for automated incident reporting and communication.",
  },
  {
    question: "Can it provide automated incident response?",
    answer:
      "Absolutely. Beyond detection, it can be configured to take automated actions to isolate threats or mitigate risks according to your predefined security policies.",
  },
  {
    question: "How long is deployment for SAP systems?",
    answer:
      "Our deployment process is optimized for speed, typically taking only a few days to get fully integrated and operational within your SAP environment.",
  },
  {
    question: "What compliance standards are supported?",
    answer:
      "ThreatSenseAI helps you meet various compliance requirements, including GDPR, SOX, and HIPAA, by providing comprehensive auditing and reporting capabilities.",
  },
  {
    question: "Is it difficult for security teams to use?",
    answer:
      "No, we've designed an intuitive dashboard that simplifies complex security data, making it easy for teams to monitor and respond to threats without needing specialized SAP expertise.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-border-wrapper">
        <div className="faq-left">
          <div className="sub-para-text faq-label">
            <AiFillFileText color="#000" /> FAQ
          </div>
          <h1 className="head-text">Frequently asked questions</h1>
        </div>

        <div className="faq-right">
          {faqData.map((item, index) => (
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
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
