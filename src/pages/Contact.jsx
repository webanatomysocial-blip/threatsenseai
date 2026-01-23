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

      <FAQ />
    </div>
  );
}
