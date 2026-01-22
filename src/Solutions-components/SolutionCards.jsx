import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "../css/Solutions-pages.css";
import bgImage from "../assets/home/Our-Solutions/bg1.png";
import { FaGlobe } from "react-icons/fa";

export default function SolutionCards({ items, label, title, marginTop }) {
  const defaultLabel = "Why MCAAT?";
  const defaultTitle = (
    <>
      It goes beyond basic <br /> logging
    </>
  );

  const cardData = [
    {
      title: "DDL & DML Events",
      description:
        "Captures insert/update/delete and schema changes at the DB layer.",
      link: "#",
      img: bgImage,
    },
    {
      title: "Audit Log Disabling",
      description:
        "Detects and auto-restores deleted or disabled DB audit configurations",
      link: "#",
      img: bgImage,
    },
    {
      title: "CDHDR/CDPOS Tampering",
      description: "Flags debug-mode manipulation and suspicious value changes",
      link: "#",
      img: bgImage,
    },
    {
      title: "SAP SM19 Audit Logs",
      description: "Automatically reactivates SM19 if disabled",
      link: "#",
      img: bgImage,
    },
    {
      title: "Critical Table Access",
      description:
        "Monitors access to financial, vendor, and HR tables (e.g., EKKO, BUT000, BKPF)",
      link: "#",
      img: bgImage,
    },
  ];

  const displayItems = items || cardData;

  return (
    <section
      className="solution-cards-container"
      style={{ marginTop: marginTop }}
    >
      <div className="capabilities-header">
        <div className="sub-para-text security-label">
          <FaGlobe size={16} style={{ marginRight: "4px" }} />{" "}
          {label || defaultLabel}
        </div>
        <h2 className="head-text">{title || defaultTitle}</h2>
      </div>
      {displayItems.map((card, index) => (
        <div className="solution-card-row" key={index}>
          <div className="solution-card-text">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.link} className="read-more-link">
              Read More <BsArrowRight />
            </a>
          </div>
          <div className="solution-card-visual">
            <img src={card.img} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
}
