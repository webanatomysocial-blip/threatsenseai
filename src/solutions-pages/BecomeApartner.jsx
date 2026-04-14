import React from 'react'
import MentorCarousel from '../Solutions-components/MentorCarousel'
import RealWorld from "../Solutions-components/RealWorld";
import { FaInfoCircle } from "react-icons/fa";
import PartnerBenefits from '../Solutions-components/PartnerBenefits';
import SecurityControls from "../Solutions-components/SecurityControls";
import TadsCap from "../Solutions-components/TadsCap";
import { FiSend, FiCpu, FiGitMerge, FiToggleLeft, FiBox, FiSliders } from "react-icons/fi";
import PartnerSuccess from '../Solutions-components/PartnerSuccess';
import Cta from '../components/Cta';
import bg from "../assets/home/tab-section/bg-image.png";
import img from "../assets/solutions/tadsprotect/partner.png";

export default function BecomeAPartner() {
  const realWorldFeatures = [
    { title: "Expand Your Security Portfolio" },
    { title: "Unlock New Revenue Streams" },
    { title: "Deliver Greater Value to Customers" },
    { title: "Access Enterprise-Grade Security Solutions" },
  ];

  const tadsCapFeatures = [

    {
      id: 1, icon: <FiSend />, title: "Technology Partners",
      desc: "Integrate ThreatSenseAI solutions with your existing platforms to enhance security capabilities and deliver greater value to customers.",
    },
    {
      id: 2, icon: <FiCpu />, title: "Resellers & Channel Partners",
      desc: "Offer ThreatSenseAI products to your clients and expand your cybersecurity portfolio with industry-leading data protection solutions.",
    },
    {
      id: 3, icon: <FiGitMerge />, title: "Consulting & Implementation Partners",
      desc: "Provide advisory, deployment, and integration services for organizations implementing ThreatSenseAI solutions.",
    },
    {
      id: 4, icon: <FiToggleLeft />, title: "Strategic Alliances",
      desc: "Collaborate on large-scale enterprise security initiatives and joint market opportunities.",
    },

  ];
  const partnerSuccessStages = [
    {
      id: 1,
      num: "1",
      title: "Apply",
      subtitle: "",
      desc: "Submit your partner application through our website.",
    },
    {
      id: 2,
      num: "2",
      title: "Evaluation",
      subtitle: "",
      desc: "Our team reviews your organization’s capabilities and alignment with our partner program.",
    },
    {
      id: 3,
      num: "3",
      title: "Onboarding",
      subtitle: "",
      desc: "Approved partners receive onboarding support, product training, and access to partner resources.",
    },
  ];
  const globalpartner = [
    {
      id: 1,
      num: "1",
      subtitle: "Ideal Partner Profiles",
      title: "We collaborate with organizations that specialize in:",
      items: [
        "Cybersecurity consulting",
        "SAP security and governance",
        "Data privacy and compliance",
        "Cloud security and architecture",
        "Enterprise technology solutions",
        "Digital transformation services"
      ]
    },
    {
      id: 2,
      num: "2",
      subtitle: "Our Partner Ecosystem",
      title: "ThreatSenseAI partners with organizations across multiple industries including:",
      items: [
        "Financial services",
        "Healthcare",
        "Manufacturing",
        "Technology and SaaS",
        "Government and public sector",
        "Consulting and professional services"
      ]
    },
  ];


  return (
    <>
      <section className="tads-protect-banner-2">
        <div className="tads-banner-content">
          <h1 className="big-text-head" style={{ color: "#fff" }}>
            Partner With Us
          </h1>
          <h1 className="big-text-head" style={{ font: "italic 400 1em 'Instrument Serif'", color: "#fff", margin: "-28px" }}>
            Secure the Future of Enterprise Data
          </h1>
          <p className="sub-para-text" style={{ color: "#fff", margin: "10px" }}>
            Join the ThreatSenseAI partner ecosystem and help organizations protect their most critical data across SAP and enterprise environments.
          </p>
          <a href="https://tidycal.com/threatsenseai/threatsense-ai-partner-discovery-call" className="white-button">   Apply to become a Partner</a>
        </div>
      </section>
      {/* <MentorCarousel /> */}
      <RealWorld
        subtitle="Why Partner With ThreatSenseAI"
        title="Unlock New Opportunities in Data Security"
        desc='Partnering with ThreatSenseAI gives your organization access to innovative technologies designed to protect enterprise data across modern digital environments.'
        ctaText=""
        ctaLink="https://tidycal.com/threatsenseai/tads"
        features={realWorldFeatures}
        icon={FaInfoCircle}
        img={img}
      />
      <PartnerBenefits />

      <TadsCap
        features={tadsCapFeatures}
        subtitle="Partnership Opportunities"
        title={<>Choose the Partnership Model<br /> That Fits Your Business</>}
        gridCols="2"
      />
      <PartnerSuccess
        features={partnerSuccessStages}
        subtitle="Partner Success Journey"
        title={<>How to Become a

          <br /> ThreatSenseAI Partner</>}
        gridCols="3"
      />
      <PartnerSuccess
        features={globalpartner}
        subtitle="Partnership Opportunities"
        title={<>Join Our Global Partner Ecosystem</>}
        gridCols="2"
      />
      <Cta
        title={<>Partner With Us to  <br />Drive Growth and Innovation </>}
        description={<>Join ThreatSense AI’s global partner ecosystem and deliver advanced security solutions <br/> to your customers while expanding your business opportunities.</>}
        backgroundImage={bg}
        buttonText="Become a Partner"
        link="https://tidycal.com/threatsenseai/threatsense-ai-partner-discovery-call"
      />


    </>
  )
}