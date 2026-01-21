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
      text: `"We no longer waste time on manual threat analysis — AI-powered insights help us detect and mitigate risks before they escalate."`,
      name: "Compliance Officer",
      role: "Retail Enterprise",
      icon: <FiLayers />,
    },
    {
      id: 2,
      text: `"The built-in ITSM solution is a game changer. Incident management is now faster and more efficient than ever."`,
      name: "Head IT",
      role: "Pharma Industry",
      icon: <FiGlobe />,
    },
    {
      id: 3,
      text: `"Seamless integration with our existing SAP landscape made the deployment painless and quick."`,
      name: "CISO",
      role: "Manufacturing",
      icon: <FiTrendingUp />,
    },
    {
      id: 4,
      text: `"The privacy controls give us peace of mind knowing our data is handled securely across all regions."`,
      name: "Security Lead",
      role: "FinTech",
      icon: <FiUserCheck />,
    },
  ];

  const testimonialsBottom = [
    {
      id: 5,
      text: `"Made for our launch. It felt like having an extra expert on the team guiding us through compliance."`,
      name: "CTO",
      role: "Tech Startup",
      icon: <FiSmile />,
    },
    {
      id: 6,
      text: `"Flexible customizations allowed us to tailor the alerts exactly to our workflow needs."`,
      name: "Ops Manager",
      role: "Logistics",
      icon: <FiLayers />,
    },
    {
      id: 7,
      text: `"24/7 monitoring has caught issues we would have definitely missed otherwise. Highly recommended."`,
      name: "Director of Engineering",
      role: "SaaS Platform",
      icon: <FiGlobe />,
    },
    {
      id: 8,
      text: `"The automated response features have cut our mean time to resolution by over 60%."`,
      name: "VP of Security",
      role: "E-commerce",
      icon: <FiTrendingUp />,
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
          Trusted by hundreds of <br /> forward-thinking startups
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
