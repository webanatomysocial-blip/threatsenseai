import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import "../css/Solutions-pages.css";
import bgImage from "../assets/home/Our-Solutions/bg1.png";

export default function SolutionCards() {
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

  return (
    <section className="solution-cards-container">
      {cardData.map((card, index) => (
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
