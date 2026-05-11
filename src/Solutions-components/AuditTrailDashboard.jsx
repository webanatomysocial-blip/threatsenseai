import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaEnvelope, FaShieldAlt, FaFileAlt } from "react-icons/fa";
import "../css/AuditTrailDashboard.css";

const AuditTrailDashboard = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from(".at-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Animate Donut
      gsap.fromTo(
        ".at-donut-fill",
        { strokeDashoffset: 283 },
        { strokeDashoffset: 0, duration: 2, ease: "power2.inOut", delay: 0.5 }
      );

      // Animate Chart Path
      const path = document.querySelector(".at-chart-line");
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          delay: 1,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="at-dashboard-container" ref={containerRef}>
      <div className="at-dashboard-header">
        <div className="at-header-icon">
          <FaFileAlt />
        </div>
        <span className="at-header-title">ATE Use Cases</span>
      </div>

      <div className="at-dashboard-grid">
        {/* Card 1: Coverage */}
        <div className="at-card">
          <h3 className="at-card-title">Audit Trail Coverage</h3>
          <div className="at-card-content">
            <div className="at-donut-wrapper">
              <svg className="at-donut-svg" width="100" height="100">
                <circle className="at-donut-bg" cx="50" cy="50" r="45" />
                <circle
                  className="at-donut-fill"
                  cx="50"
                  cy="50"
                  r="45"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                />
              </svg>
              <div className="at-donut-text">100%</div>
            </div>
          </div>
          <div className="at-card-footer">All DDL & DML activities captured</div>
        </div>

        {/* Card 2: Activities */}
        <div className="at-card">
          <h3 className="at-card-title">Audit Activities Captured</h3>
          <div className="at-card-content">
            <div className="at-pills-grid">
              <div className="at-pill">
                <div className="at-pill-number">54</div>
                <div className="at-pill-label">Config</div>
              </div>
              <div className="at-pill">
                <div className="at-pill-number">54</div>
                <div className="at-pill-label">DDL</div>
              </div>
              <div className="at-pill">
                <div className="at-pill-number active">72</div>
                <div className="at-pill-label">DML</div>
              </div>
              <div className="at-pill">
                <div className="at-pill-number warning">89</div>
                <div className="at-pill-label">Privileged Access</div>
              </div>
            </div>
          </div>
          <div className="at-card-footer">Critical system operations monitored 24/7</div>
        </div>

        {/* Card 3: Actions */}
        <div className="at-card">
          <h3 className="at-card-title">Alert & Storage Actions</h3>
          <div className="at-card-content">
            <div className="at-actions-wrapper">
              <div className="at-action-box">
                <FaEnvelope className="at-action-icon" />
                <span className="at-action-label">Email Alert Sent</span>
              </div>
              <div className="at-action-box">
                <FaShieldAlt className="at-action-icon" />
                <span className="at-action-label">Stored Securely</span>
              </div>
            </div>
          </div>
          <div className="at-card-footer">Immediate alert & evidence preserved</div>
        </div>

        {/* Card 4: Integrity */}
        <div className="at-card">
          <h3 className="at-card-title">Audit Integrity Monitoring</h3>
          <div className="at-card-content">
            <div className="at-chart-wrapper">
              <svg viewBox="0 0 200 60" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                <path 
                  className="at-chart-line"
                  d="M0,45 Q20,40 40,43 T80,45 T120,20 T160,40 T200,42" 
                />
                <path 
                  className="at-chart-area"
                  d="M0,45 Q20,40 40,43 T80,45 T120,20 T160,40 T200,42 L200,60 L0,60 Z" 
                />
              </svg>
            </div>
          </div>
          <div className="at-card-footer">Logs monitored & restored instantly</div>
        </div>
      </div>
    </div>
  );
};

export default AuditTrailDashboard;
