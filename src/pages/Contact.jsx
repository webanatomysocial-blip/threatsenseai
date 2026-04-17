import React from "react";
import "../css/Contact.css";
import {
  AiFillMessage,
  AiFillQuestionCircle,
  AiFillMail,
  AiFillThunderbolt,
  AiFillFileText,
} from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";
import FAQ from "../components/FAQ";

export default function Contact() {
  const connectWays = [
    {
      icon: <AiFillQuestionCircle size={24} color="#FF5400" />,
      title: "Help & support",
      desc: "Get assistance with using Sprint and troubleshooting issues.",
    },
    {
      icon: <AiFillMail size={24} color="#FF5400" />,
      title: "Sales",
      desc: "Speak to our sales team about plans, pricing, enterprise contracts",
    },
    {
      icon: <AiFillThunderbolt size={24} color="#FF5400" />,
      title: "Join the community",
      desc: "Chat with us directly and become a part of the Sprintt community",
    },
  ];

  const faqData = [
    {
      question: "How does ThreatSenseAI detect SAP threats in real-time?",
      answer:
        "ThreatSenseAI uses advanced AI and machine learning algorithms to monitor SAP system logs and network traffic constantly. It identifies patterns indicative of threats and alerts security teams instantly.",
    },
    {
      question: "Does it integrate with ServiceNow and MS Teams?",
      answer:
        "Yes, ThreatSenseAI offers seamless integration with popular ITSM and collaboration tools like ServiceNow and MS Teams for automated icon reporting and communication.",
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

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="sub-para-text security-label ">
          <AiFillMessage style={{ marginRight: "4px" }} /> Contact us
        </div>
        <h1 className="head-text">Let's get in touch</h1>
        <p className="sub-para-text contact-desc">
          Have a question or feedback? Fill out the form below, and we'll get
          back to you.
        </p>
      </div>

      <div className="contact-form-wrapper">
        <form className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label>First name</label>
              <input type="text" placeholder="Jane" className="form-input" />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text" placeholder="Smith" className="form-input" />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="username@gmail.com"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input
                type="tel"
                placeholder="+91 1234567890"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label>How can we help ?</label>
            <textarea
              placeholder="Write your message here"
              className="form-textarea"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      <section className="connect-section">
        <div className="contact-header">
          <div className="sub-para-text contact-label">
            <AiFillFileText style={{ marginRight: "4px" }} /> FAQ
          </div>
          <h1 className="head-text">More ways to connect</h1>
        </div>

        <div className="connect-wrapper">
          {connectWays.map((way, index) => (
            <div key={index} className="connect-item">
              <div className="connect-icon-wrapper">{way.icon}</div>
              <div className="connect-content">
                <p className="sub-head-text">{way.title}</p>
                <p className="para-text">{way.desc}</p>
              </div>
              <div className="connect-arrow">
                <HiChevronRight size={20} color="#666" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={faqData} />
    </div>
  );
}
