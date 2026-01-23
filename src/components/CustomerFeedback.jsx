import React from "react";
import "../css/CustomerFeedback.css";
import { AiFillAppstore } from "react-icons/ai";
import {
  FiLayers,
  FiGlobe,
  FiSmile,
  FiUserCheck,
  FiTrendingUp,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const CustomerFeedback = () => {
  const testimonialsTop = [
    {
      id: 1,
      text: "Manual reviews limited our visibility. ThreatSense AI gave us continuous monitoring and audit-ready evidence, significantly strengthening our compliance posture.",
      name: "Compliance Officer",
      role: "Retail Enterprise",
      icon: <FiLayers />,
    },
    {
      id: 2,
      text: "The built-in automation transformed our operations—what took hours now takes minutes, with full visibility across SAP and enterprise systems.",
      name: "Head of IT Security",
      role: "Pharmaceutical Organization",
      icon: <FiGlobe />,
    },
    {
      id: 3,
      text: "Insider risks and data leakage were our biggest concerns. ThreatSense AI helped us enforce controls in real-time, not after incidents occurred",
      name: "CISO",
      role: "Manufacturing Enterprise",
      icon: <FiTrendingUp />,
    },
    {
      id: 4,
      text: "MCA Rule 11(g) compliance was a constant risk; MCAAT delivered SAP audit visibility and confidence, making audits stress-free and reliable.",
      name: "Head of Internal Audit",
      role: "Large Manufacturing Enterprise",
      icon: <FiUserCheck />,
    },
  ];

  const testimonialsBottom = [
    {
      id: 5,
      text: "Insider data leakage worried us, especially in SAP. TADS enforced real-time endpoint and application controls, stopping unauthorized access before breaches.",
      name: "Chief Information Security Officer",
      role: "Global Services Organization",
      icon: <FiSmile />,
    },
    {
      id: 6,
      text: "ThreatSense AI’s SIEM and SOAR transformed incident response, cutting alert noise, automating actions, and freeing teams to focus on threats..",
      name: "SOC Manager",
      role: "Financial Services Enterprise",
      icon: <FiLayers />,
    },
    {
      id: 7,
      text: "What impressed us most was the unified approach—audit, data security, and threat response together, delivering end-to-end visibility across SAP and enterprise systems.",
      name: "IT Risk & Security Lead",
      role: "Power Generation Enterprise",
      icon: <FiGlobe />,
    },
  ];

  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    speed: 5000, // Smooth continuous scroll speed
    allowTouchMove: true, // Enable swipe
  };

  return (
    <div className="customer-feedback-container">
      <div className="feedback-header">
        <div
          className="sub-para-text"
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <AiFillAppstore /> Customer Feedback
        </div>
        <h2 className="head-text">
          Trusted by security <br/>and compliance leaders
        </h2>
      </div>

      <div className="feedback-marquee-wrapper">
        {/* Top Row - Scrolls Left (Default) */}
        <Swiper
          {...swiperOptions}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          className="feedback-swiper"
        >
          {[...testimonialsTop, ...testimonialsTop].map((item, index) => (
            <SwiperSlide key={`t1-${index}`} className="feedback-slide">
              <div className="feedback-card">
                <p className="feedback-text">{item.text}</p>
                <div className="feedback-author">
                  <div className="author-icon">{item.icon}</div>
                  <div className="author-info">
                    <span className="author-name">{item.name}</span>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Row - Scrolls Right */}
        <Swiper
          {...swiperOptions}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true, // Reverse direction
          }}
          className="feedback-swiper"
        >
          {[...testimonialsBottom, ...testimonialsBottom].map((item, index) => (
            <SwiperSlide key={`t2-${index}`} className="feedback-slide">
              <div className="feedback-card">
                <p className="feedback-text">{item.text}</p>
                <div className="feedback-author">
                  <div className="author-icon">{item.icon}</div>
                  <div className="author-info">
                    <span className="author-name">{item.name}</span>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerFeedback;
