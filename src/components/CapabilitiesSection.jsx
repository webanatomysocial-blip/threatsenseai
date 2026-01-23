import "../css/About-Us.css";
import { FaGlobe } from "react-icons/fa";

const CapabilitiesSection = ({
  header = {
    icon: <FaGlobe size={16} style={{ marginRight: "4px" }} />,
    label: "Capabilities",
    title: "What it brings?",
    subtitle: "",
  },
  items,
  gridTemplateColumns,
  border,
  borderRadius,
}) => {
  return (
    <section className="capabilities-section">
      <div className="capabilities-header">
        <div className="sub-para-text security-label">
          {header.icon} {header.label}
        </div>

        <h2 className="head-text">{header.title}</h2>

        {header.subtitle && (
          <p className="sub-para-text">{header.subtitle}</p>
        )}
      </div>

      <div
        className="capabilities-grid"
        style={
          gridTemplateColumns ? { "--grid-cols": gridTemplateColumns } : {}
        }
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="capability-card"
            style={{
              ...(border ? { border } : {}),
              ...(borderRadius ? { borderRadius } : {}),
            }}
          >
            <div className="icon-wrapper">{item.icon}</div>
            <div className="capability-content">
              <h3 className="sub-head-text">{item.title}</h3>
              <p className="sub-para-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
