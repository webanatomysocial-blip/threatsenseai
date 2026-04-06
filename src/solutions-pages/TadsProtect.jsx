import React from "react";
import "../css/tadsprotect.css";
import "../css/Solutions-pages.css";
import EndpointVulnerability from "../Solutions-components/EndpointVulnerability";
import BuildToProtect from "../Solutions-components/BuildToProtect";
import TadsCap from "../Solutions-components/TadsCap";
import SecurityControls from "../Solutions-components/SecurityControls";
import RealWorld from "../Solutions-components/RealWorld";
import AdsProtectWorks from "../Solutions-components/AdsProtectWorks";
import Cta from "../components/Cta";
import bg from "../assets/home/tab-section/bg-image.png";

import img1 from "../assets/solutions/tadsprotect/1.png";
import img2 from "../assets/solutions/tadsprotect/2.png";
import img3 from "../assets/solutions/tadsprotect/3.png";
import img4 from "../assets/solutions/tadsprotect/4.png";
import { FaPrint, FaUsb, FaDesktop, FaFileAlt } from "react-icons/fa";
import { FiSend, FiCpu, FiGitMerge, FiToggleLeft, FiBox, FiSliders } from "react-icons/fi";

const TadsProtect = () => {

    const endpointFeatures = [
        { icon: <FaPrint />, title: "Printing financial documents" },
        { icon: <FaFileAlt />, title: "Capturing sensitive data via screenshots" },
        { icon: <FaUsb />, title: "Copying data to USB drives" },
        { icon: <FaDesktop />, title: "Sharing screens in meetings" },
    ];

    const buildToProtectFeatures = [
        { icon: <FaPrint />, title: "Real-time data activity monitoring" },
        { icon: <FaFileAlt />, title: "File download and export control" },
        { icon: <FaDesktop />, title: "Screenshot and screen sharing protection" },
        { icon: <FaUsb />, title: "USB and external device control" },
    ];

    const tadsCapFeatures = [
        {
          id: 1, icon: <FiSend />, title: "Screenshot & Screen Capture Protection",
          desc: "Blocks screen capture tools and prevents users from capturing SAP screens using screenshots or recording software.",
        },
        {
          id: 2, icon: <FiCpu />, title: "Print & Export Control",
          desc: "Restricts unauthorized printing, PDF exports, and report downloads based on user roles and policies.",
        },
        {
          id: 3, icon: <FiGitMerge />, title: "USB & External Device Control",
          desc: "Prevents copying SAP data to USB drives or external storage devices.",
        },
        {
          id: 4, icon: <FiToggleLeft />, title: "Screen Watermarking",
          desc: "Applies dynamic watermarks to sensitive SAP screens to deter unauthorized capture or sharing.",
        },
        {
          id: 5, icon: <FiBox />, title: "Meeting & Screen Share Protection",
          desc: "Blocks sharing of sensitive SAP screens during online meetings or collaboration tools.",
        },
        {
          id: 6, icon: <FiSliders />, title: "Role-Aware Policy Enforcement",
          desc: "Security controls adapt based on SAP roles, ensuring authorized users maintain productivity.",
        },
    ];

    const adsProtectWorksFeatures = [
        {
          title: "Step 1: Monitor User Activity",
          desc: "Continuously tracks user actions such as file downloads, screen captures, printing, and data transfers at the endpoint.",
        },
        {
          title: "Step 2: Detect Sensitive Data Usage",
          desc: "Identifies when sensitive business data is accessed, exported, or shared through endpoint activities.",
        },
        {
          title: "Step 3: Enforce Security Controls",
          desc: "Applies real-time controls like blocking screenshots, restricting exports, and preventing unauthorized device usage.",
        },
        {
          title: "Step 4: Log & Alert",
          desc: "Records all activities for audit and sends instant alerts for policy violations or suspicious behavior.",
        }
    ];

    const securityControlsData = [
        {
          title: "Screen & Capture Protection",
          points: [
            "Disable screenshots and screen recording",
            "Prevent screen sharing of sensitive data",
            "Block snipping and capture tools",
          ],
        },
        {
          title: "Print & Export Controls",
          points: [
            "Restrict printing of sensitive documents",
            "Control PDF and report exports",
            "Apply policies based on user roles",
          ],
        },
        {
          title: "Device & Data Transfer Control",
          points: [
            "Block USB and external storage access",
            "Prevent unauthorized file transfers",
            "Control data movement outside endpoints",
          ],
        },
        {
          title: "Monitoring & Enforcement",
          points: [
            "Track user activity in real time",
            "Enforce policies instantly",
            "Log all actions for audit and compliance",
          ],
        },
    ];

    const realWorldFeatures = [
        { title: "Protect Financial & Transactional Data" },
        { title: "Secure PII & Employee Information (HR Data)" },
        { title: "Protect Intellectual Property & Business-Critical Data" },
        { title: "Prevent Insider Data Exfiltration & Misuse" },
    ];

    return (
        <>
            <section className="tads-protect-banner">
                <div className="tads-banner-content">
                    <h1 className="big-text-head" style={{ color: "#fff" }}>
                        TADS Protect
                    </h1>
                    <h1 className="big-text-head" style={{ font: "italic 400 1em 'Instrument Serif'", color: "#fff", margin: "-28px" }}>
                        Data Leak Prevention
                    </h1>
                    <p className="sub-para-text" style={{ color: "#fff", margin: "10px" }}>
                        Protect sensitive SAP data directly at the user endpoint preventing screenshots, exports, downloads, and unauthorized sharing before data leaves your system.
                    </p>
                </div>
            </section>

            <EndpointVulnerability 
                label="Data Protection Beyond SAP"
                title={<>Why SAP Data Is <br /> Vulnerable at the Endpoint</>}
                desc="Once a user logs into SAP, sensitive data can easily be extracted through everyday actions:"
                listItems={[
                  "Data exported into Excel, PDFs, or local files",
                  "Screenshots captured without any restriction",
                  "Sensitive information copied to external devices",
                  "Files shared outside the organization",
                ]}
                bottomDesc="No tracking of what happens after data leaves SAP"
                ctaText="Book A Free Demo"
                ctaLink="https://tidycal.com/threatsenseai/tads"
                features={endpointFeatures} 
                img={[img1, img2]}
            />
            
            <BuildToProtect 
                label="Endpoint Protection Layer"
                title={<>Built to Protect SAP Data <br /> Where It’s Most Exposed</>}
                desc="Traditional security tools monitor networks or endpoints but they rarely understand SAP data flows. ThreatSenseAI TADS Protect adds a dedicated SAP-aware protection layer at the endpoint to prevent unauthorized access, data leakage, and insider misuse."
                features={buildToProtectFeatures} 
                img={img3}
            />
            
            <TadsCap 
                label="TADS capabilities"
                title={<>Comprehensive endpoint protection purpose <br />built for SAP environments</>}
                features={tadsCapFeatures} 
            />
            
            <AdsProtectWorks 
                label="The Solution"
                subPara="How It Works"
                title="How TADS Protect Works"
                desc="Four-step real-time protection pipeline"
                features={adsProtectWorksFeatures} 
            />
            
            <SecurityControls 
                label="Core Capabilities"
                title="Security Controls"
                controls={securityControlsData} 
            />
            
            <RealWorld 
                title="Real-world scenarios where TADS Protect delivers critical value"
                ctaText="Protect Your Data Today"
                ctaLink="https://tidycal.com/threatsenseai/tads"
                features={realWorldFeatures} 
                img={img4}
            />

            <Cta
                title={ <>Protect Your SAP Data Before <br /> It Leaves Your Enterprise</>}
                description={<>ThreatSenseAI TADS Protect delivers real-time protection against <br/>insider risks, accidental leaks, and unauthorized data exports.</>}
                backgroundImage={bg}
                buttonText="Request A Demo"
                link="https://tidycal.com/threatsenseai/mca-audit-trail-rule-11g-demo"
            />
        </>
    );
};

export default TadsProtect;
