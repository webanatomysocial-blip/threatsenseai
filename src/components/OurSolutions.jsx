import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/OurSolutions.css";
import { FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";

import mcaatGif1 from "../assets/home/Our-Solutions/mcaat.mp4";
import mcaatGif2 from "../assets/home/Our-Solutions/tads.mp4";
import mcaatGif3 from "../assets/home/Our-Solutions/siem.mp4";

gsap.registerPlugin(ScrollTrigger);

const OurSolutions = ({ id }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const cards = cardsRef.current.filter(Boolean);
        if (cards.length === 0) return;

        cards.forEach((card, index) => {
          const isLast = index === cards.length - 1;

          // Pinning logic
          ScrollTrigger.create({
            trigger: card,
            start: "top 100px",
            endTrigger: containerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });

          // Scale animation as cards stack
          if (!isLast) {
            gsap.to(card, {
              scale: 0.9,
              scrollTrigger: {
                trigger: cards[index + 1],
                start: "top 80%",
                end: "top 20%",
                scrub: true,
              },
            });
          }
        });
      });
    }, containerRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimer);
    };
  }, []);

  const solutions = [
    {
      title: "MCAAT",
      desc: "Compliance is not documentation. It's control. MCAAT ensures audit trails in SAP cannot be disabled, altered, or bypassed.",
      subheading: "Built for Rule 11(g) Enforcement",
      features: [
        "Rule 11(g) compliance made enforceable",
        "Secure audit logging at source",
        "Audit-ready reporting on demand",
      ],
      media: mcaatGif1,
      reverse: false,
      link: "/mcaat",
      btn: "Explore MCAAT",
    },
    {
      title: "ThreatSense AI Data Security (TADS)",
      desc: "Prevent Data Leaks Before They Happen. Most data leaks are caused by trusted users.",
      features: [
        "Real-time data access enforcement",
        "Insider threat prevention controls",
        "Policy-driven data protection",
        "Tamper-resistant security layer",
      ],
      media: mcaatGif2,
      reverse: true,
      link: "/tads",
      btn: "Explore TADS",
      videoClass: "tads-card-video",
    },
    {
      title: "SIEM & SOAR",
      desc: "AI-Driven Threat Detection & Response across SAP and non-SAP environments.",
      features: [
        "Continuous monitoring",
        "Real-time alerts",
        "Automated incident response",
      ],
      media: mcaatGif3,
      reverse: false,
      link: "/siem-soar",
      btn: "Explore SIEM & SOAR",
    },
  ];

  return (
    <div className="our-solutions-container" ref={containerRef}>
      <div className="solutions-header" id={id}>
        <div
          className="sub-para-text"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaLayerGroup size={18} style={{ marginRight: "4px" }} />
          Our Solutions
        </div>

        <h2 className="head-text">
          Explore cybersecurity solutions <br />
          built to protect enterprise data
        </h2>
      </div>

      <div className="cards-wrapper">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="solution-card-container"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div
              className={`solution-card ${solution.reverse ? "reverse" : ""}`}
            >
              <div className="card-content">
                <h3 className="head-text">{solution.title}</h3>

                {solution.subheading && (
                  <h4 className="sub-para-text">{solution.subheading}</h4>
                )}

                <p className="solution-desc para-text">{solution.desc}</p>

                <ul className="features-list">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={solution.link} className="white-button">
                  {solution.btn}
                </Link>
              </div>

              <div className="card-image-section">
                <video
                  src={solution.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`card-image ${solution.videoClass || ""}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSolutions;
