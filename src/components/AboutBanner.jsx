import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../css/AboutBanner.css";
import bannerImg from "../assets/about-images/banner.jpg";
import ideaSvg from "../assets/about-images/idea.svg";

export default function AboutBanner() {
  const headerRef = useRef(null);

  useEffect(() => {
    const chars = headerRef.current.querySelectorAll(".split-text-char");

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 30,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  }, []);

  const splitLetters = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="split-text-char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="about-banner-container">
      <div className="about-banner-header">
        <h1 className="big-text-head" ref={headerRef}>
          Why {splitLetters("ThreatSenseAi?")}
        </h1>
        <p className="sub-para-text" style={{ textAlign: "center" }}>
          ThreatSenseAi ensures least privilege access, real-time threat
          blocking, and automated incident response, all without disrupting
          business operations. Its lightweight, non-intrusive design makes it
          the ultimate security solution for safeguarding critical SAP
          environments.
        </p>
      </div>

      <div className="about-banner-layout">
        <div className="about-banner-image-box">
          <img src={bannerImg} alt="Our environment" />
        </div>

        <div className="about-banner-orange-box">
          <img src={ideaSvg} alt="Idea" className="idea-icon" />
          <div className="orange-box-content">
            <h2 className="head-text">
              Our Story <br />
              Started in 2010
            </h2>
            <p className="para-text-white">
              ThreatSenseAi is revolutionizing cybersecurity by seamlessly
              integrating advanced SIEM and SOAR capabilities into one powerful
              solution. Our platform is engineered to provide deep, real-time
              threat detection and automated incident response, empowering
              enterprises to proactively safeguard their digital assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
