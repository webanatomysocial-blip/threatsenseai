import "../css/OurTeam.css";
import { FaUsers, FaLinkedinIn } from "react-icons/fa";
import bgImage from "../assets/home/Our-Solutions/bg1.png";

const OurTeam = () => {
  const teamMembers = [
    { name: "Name", role: "Role" },
    { name: "Name", role: "Role" },
    { name: "Name", role: "Role" },
    { name: "Name", role: "Role" },
    { name: "Name", role: "Role" },
    { name: "Name", role: "Role" },
  ];

  return (
    <div className="our-team-section">
      <div className="our-team-header">
        <div className="sub-para-text team-label">
          <FaUsers size={16} /> Our Team
        </div>
        <h2 className="head-text">Meet our leading experts</h2>
      </div>

      <div className="our-team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image-wrapper">
              <img src={bgImage} alt={member.name} className="team-image" />
              <a href="#" className="linkedin-btn">
                <FaLinkedinIn size={16} />
              </a>
            </div>
            <div className="team-content">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
