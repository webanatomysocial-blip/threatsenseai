import "../css/WhyWeExist.css";
import { BsEye, BsShield, BsClipboard } from "react-icons/bs";
import AnimatedContent from "./AnimatedContent";
import { FaFlag } from "react-icons/fa";

const WhyWeExist = () => {
  return (
    <section className="why-we-exist">
      <div className="why-container">

        <span className="why-eyebrow" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <FaFlag size={18} color="black" />
          Why We Exist
        </span>

        <h2 className="head-text">
          Enterprise Risk Has Changed. Security Hasn’t.
        </h2>

        <p className="para-text why-description">
          Modern enterprises run on SAP and other mission-critical systems that
          process vast volumes of sensitive business, financial, and personal
          data. Yet most security controls still focus on perimeter defense and
          access management leaving significant blind spots around data
          movement, insider activity, and operational misuse.
        </p>

        {/* Animate the cards */}
        <AnimatedContent distance={50} direction="vertical" reverse={false} threshold={0.2} className="why-cards">
          <div className="why-card">
            <div className="why-icon"><BsEye size={20} color="#F97015" /></div>
            <p className="sub-para-text">
              How is sensitive SAP data actually being used and moved?
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon"><BsShield size={20} color="#F97015" /></div>
            <p className="sub-para-text">
              Who can bypass controls without triggering alerts?
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon"><BsClipboard size={20} color="#F97015" /></div>
            <p className="sub-para-text">
              How do we enforce compliance continuously, not just prove it during audits?
            </p>
          </div>
        </AnimatedContent>

        {/* Animate the footer text */}
        <AnimatedContent distance={50} direction="vertical" reverse={false} threshold={0.2} delay={0.2} className="para-text why-footer">
          As regulations tighten and insider-driven risks increase, visibility alone is no longer enough. Enterprises need security that actively enforces policies, protects evidence, and prevents damage in real time - without slowing down the business.{" "}
          <strong>ThreatSenseAI was founded to close this gap.</strong>
        </AnimatedContent>

      </div>
    </section>
  );
};

export default WhyWeExist;
