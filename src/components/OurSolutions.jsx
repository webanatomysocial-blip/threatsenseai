import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/OurSolutions.css";
import { FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";

import mcaatGif2 from "../assets/videos/Log-files.mp4";
import mcaatGif1 from "../assets/videos/Checklist.mp4";
import mcaatGif3 from "../assets/videos/Alert.mp4";

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

          // Scale animation as cards stack
          if (!isLast) {
            gsap.to(card.querySelector(".solution-card"), {
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

    return () => {
      ctx.revert();
    };
  }, []);

  const solutions = [
    {
      title: "Audit Trail Enforcer",
      desc: "Compliance is not documentation. It is control. ThreatSense AI’s Audit Trail Enforcer helps ensure SAP audit trails remain continuously active, protected from unauthorized disablement, alteration, or bypass attempts across global compliance requirements. ",
      subheading: "Built to enforce complete traceability across SAP systems ",
      features: [
        "Enforceable controls aligned to global regulations, including MCA Audit Trail Rule 11(g) ",
        "Secure audit logging directly at source",
        "Audit-ready reporting available on demand",
      ],
      media: mcaatGif1,
      reverse: false,
      link: "/audit-trail-enforcer",
      btn: "Explore Audit Trail Enforcer",
    },
    {
      title: "ThreatSense AI Data Security",
      desc: "Prevent Data Leaks Before They Happen. Most data leaks are caused by trusted users.",
      features: [
        "Real-time data access enforcement",
        "Insider threat prevention controls",
        "Policy-driven data protection",
        "Tamper-resistant security layer",
      ],
      media: mcaatGif2,
      reverse: true,
      link: "/threatsenseai-data-security",
      btn: "Explore ThreatSense AI Data Security",
      videoClass: "tads-card-video",
    },
    {
      title: "ThreatOps for SAP",
      desc: "AI-Driven Threat Detection & Response across SAP and non-SAP environments.",
      features: [
        "Continuous monitoring",
        "Real-time alerts",
        "Automated incident response",
      ],
      media: mcaatGif3,
      reverse: false,
      link: "/threatops-for-sap",
      btn: "Explore ThreatOps for SAP",
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
