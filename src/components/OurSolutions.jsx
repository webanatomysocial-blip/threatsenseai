import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/OurSolutions.css";
import cardImage from "../assets/home/Our-Solutions/bg1.png";
import { AiFillInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const OurSolutions = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let mm = gsap.matchMedia();
    3;
    mm.add(
      "(min-width: 769px)",
      () => {
        const cards = cardsRef.current;

        // Card 1 Animation:
        // When Card 2 comes up, Card 1 scales to 0.7
        gsap.to(cards[0], {
          scale: 0.7,
          ease: "none",
          immediateRender: false, // Prevent conflict on load
          scrollTrigger: {
            trigger: cards[1],
            start: "top bottom", // Starts when Card 2 enters viewport
            end: "top top+=150px", // Ends when Card 2 hits the sticky top (approx)
            scrub: 1, // Smooth dragging to prevent jitter
          },
        });

        // When Card 3 comes up, Card 1 scales further from 0.7 down to 0.6
        gsap.to(cards[0], {
          scale: 0.6,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: cards[2],
            start: "top bottom",
            end: "top top+=150px",
            scrub: 1,
          },
        });

        // Card 2 Animation:
        // When Card 3 comes up, Card 2 scales to 0.6
        gsap.to(cards[1], {
          scale: 0.6,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: cards[2],
            start: "top bottom",
            end: "top top+=150px",
            scrub: 1,
          },
        });

        // Card 3 stays at scale 1 (default)
      },
      containerRef,
    );

    return () => mm.revert();
  }, []);

  const solutions = [
    {
      title: "MCAAT",
      desc: "Compliance is not documentation. It’s control. MCAAT ensures audit trails in SAP cannot be disabled, altered, or bypassed.",
      subheading: "Built for Rule 11(g) Enforcement",
      features: [
        "Rule 11(g) compliance made enforceable",
        "Secure audit logging at source",
        "Audit-ready reporting on demand",
      ],
      image: cardImage, // Using placeholder (unchanged)
      reverse: false,
      link: "/mcaat", // unchanged
      btn: "Explore MCAAT",
    },
    {
      title: "ThreatSense AI Data Security (TADS)",
      desc: "Prevent Data Leaks Before They Happen. Most data leaks are caused by trusted users. TADS enforces real-time controls to stop data misuse, unauthorized access, and silent exfiltration across endpoints and applications.",
      subheading: "Prevent Data Leaks Before They Happen",
      features: [
        "Real-time data access enforcement",
        "Insider threat prevention controls",
        "Policy-driven data protection",
        "Tamper-resistant security layer",
      ],
      image: cardImage, // unchanged
      reverse: true,
      link: "/tads", // unchanged
      btn: "Explore TADS",
    },
    {
      title: "SIEM & SOAR",
      desc: "AI-Driven Threat Detection & Response. ThreatSense AI SIEM & SOAR delivers real-time threat visibility and automated incident response across SAP and non-SAP environments.",
      subheading: "AI-Driven Threat Detection & Response",
      features: [
        "Continuous monitoring of SAP® and enterprise security events",
        "Real-time alerts with contextual risk insights",
        "Automated incident response and remediation workflows",
      ],
      image: cardImage, // unchanged
      reverse: false,
      link: "/siem-soar", // unchanged
      btn: "Explore SIEM & SOAR",
    },
  ];

  return (
    <div className="our-solutions-container" ref={containerRef} id="solutions">
      <div className="solutions-header">
        <div
          className="sub-para-text"
          style={{
            marginBottom: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AiFillInfoCircle
            color="black"
            size={18}
            style={{ marginRight: "4px" }}
          />{" "}
          Our Solutions
        </div>
        <h2 className="head-text">
          Explore cybersecurity solutions <br /> built to protect enterprise
          data
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
                <h4
                  className="sub-para-text"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {solution.subheading}
                </h4>
                <p className="solution-desc para-text">{solution.desc}</p>
                <ul className="features-list">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <span className="check-icon">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.link}
                  className="white-button"
                  style={{ marginTop: "20px" }}
                >
                  {solution.btn}
                </Link>
              </div>
              <div className="card-image-section">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="card-image"
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
