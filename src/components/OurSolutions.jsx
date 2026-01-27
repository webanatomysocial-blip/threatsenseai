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
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 769px)",
      () => {
        const cards = cardsRef.current;
        if (!cards[0] || !cards[1] || !cards[2]) return;

        cards.forEach((card, index) => {
          const isLast = index === cards.length - 1;

          // 1. PINNING
          ScrollTrigger.create({
            trigger: card,
            start: "top 10%",
            endTrigger: containerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
            onEnter: () => gsap.set(card, { zIndex: index + 1 }),
            onLeaveBack: () => gsap.set(card, { zIndex: index + 1 }),
          });

          // 2. SCALING - Faster/Snappier scrub
          const scaleTl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              endTrigger: containerRef.current,
              end: "bottom bottom",
              scrub: 0.1, // Reduced from 0.5 for near-instant response
            }
          });

          // Phase A: Scale to initial size
          scaleTl.to(card, {
            scale: 0.98,
            ease: "power2.out", // More responsive ease
            duration: 0.5,
          });

          if (!isLast) {
            // Recede logic
            scaleTl.to(card, { scale: 0.98, duration: 1 }); // Less dwell time

            scaleTl.to(card, {
              scale: 0.94,
              ease: "power2.out",
              duration: 0.5
            });

            if (index === 0 && cards[2]) {
              scaleTl.to(card, { scale: 0.94, duration: 1 }); // Less dwell
              scaleTl.to(card, {
                scale: 0.90,
                ease: "power2.out",
                duration: 0.5
              });
            }
          }

          // Final state hold
          scaleTl.to(card, { scale: isLast ? 0.98 : (index === 0 ? 0.90 : 0.94), duration: 2 });
        });
      },
      containerRef
    );

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      mm.revert();
      clearTimeout(refreshTimer);
    };
  }, []);

  const solutions = [
    {
      title: "MCAAT",
      desc:
        "Compliance is not documentation. It's control. MCAAT ensures audit trails in SAP cannot be disabled, altered, or bypassed.",
      subheading: "Built for Rule 11(g) Enforcement",
      features: [
        "Rule 11(g) compliance made enforceable",
        "Secure audit logging at source",
        "Audit-ready reporting on demand",
      ],
      image: cardImage,
      reverse: false,
      link: "/mcaat",
      btn: "Explore MCAAT",
    },
    {
      title: "ThreatSense AI Data Security (TADS)",
      desc:
        "Prevent Data Leaks Before They Happen. Most data leaks are caused by trusted users.",
      subheading: "Prevent Data Leaks Before They Happen",
      features: [
        "Real-time data access enforcement",
        "Insider threat prevention controls",
        "Policy-driven data protection",
        "Tamper-resistant security layer",
      ],
      image: cardImage,
      reverse: true,
      link: "/tads",
      btn: "Explore TADS",
    },
    {
      title: "SIEM & SOAR",
      desc:
        "AI-Driven Threat Detection & Response across SAP and non-SAP environments.",
      subheading: "AI-Driven Threat Detection & Response",
      features: [
        "Continuous monitoring",
        "Real-time alerts",
        "Automated incident response",
      ],
      image: cardImage,
      reverse: false,
      link: "/siem-soar",
      btn: "Explore SIEM & SOAR",
    },
  ];

  return (
    <div
      className="our-solutions-container"
      ref={containerRef}
      id="solutions"
    >
      <div className="solutions-header">
        <div
          className="sub-para-text"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "0px",
          }}
        >
          <AiFillInfoCircle size={18} style={{ marginRight: "4px" }} />
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
              className={`solution-card ${solution.reverse ? "reverse" : ""
                }`}
            >
              <div className="card-content">
                <h3 className="head-text">{solution.title}</h3>

                <h4
                  className="sub-para-text"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  {solution.subheading}
                </h4>

                <p className="solution-desc para-text">
                  {solution.desc}
                </p>

                <ul className="features-list">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <span className="check-icon">✓</span>
                      {feature}
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
