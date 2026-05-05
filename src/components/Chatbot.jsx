import React, { useState, useRef, useEffect } from "react";
import "../css/Chatbot.css";

const chatFlow = {
  start: {
    message:
      "Welcome to ThreatSenseAI. We help organizations secure SAP environments, prevent data leakage, strengthen audit compliance, and improve cyber visibility. What would you like help with today?",
    options: [
      { label: " Prevent SAP Data Leakage", next: "flow1_q1" },
      { label: " Enforce Audit Trail / MCA Rule 11(g)", next: "flow2_q1" },
      { label: " SAP Threat Detection / SIEM", next: "flow3_q1" },
      { label: "Data Masking / Scrambling", next: "flow4_q1" },
      { label: "Privacy Compliance (DPDPA / GDPR)", next: "flow5_q1" },
      { label: "Book a Demo", next: "flow6_q1" },
      { label: "Pricing / Commercials", next: "flow7_q1" },
      { label: "Speak to an Expert", next: "flow8_q1" },
    ],
  },

  // Flow 1
  flow1_q1: {
    message: "What type of data leakage concern do you have?",
    options: [
      { label: "Unauthorized Downloads", next: "flow1_q2" },
      { label: "Screenshots / Screen Recording", next: "flow1_q2" },
      { label: "Copy-Paste of Sensitive Data", next: "flow1_q2" },
      { label: "Personal Email / Cloud Uploads", next: "flow1_q2" },
      { label: "USB / Device Transfers", next: "flow1_q2" },
      { label: "Browser / GPT Prompt Exposure", next: "flow1_q2" },
      { label: "Need Full Assessment", next: "flow1_q2" },
    ],
  },
  flow1_q2: {
    message: "Which systems are in scope?",
    options: [
      { label: "SAP ECC", next: "flow1_q3" },
      { label: "SAP S/4HANA", next: "flow1_q3" },
      { label: "SAP Fiori", next: "flow1_q3" },
      { label: "SAP SuccessFactors", next: "flow1_q3" },
      { label: "SAP BTP", next: "flow1_q3" },
      { label: "Multiple Systems", next: "flow1_q3" },
    ],
  },
  flow1_q3: {
    message: "How urgent is this requirement?",
    options: [
      { label: "Immediate", next: "lead_capture" },
      { label: "Within 30 Days", next: "lead_capture" },
      { label: "This Quarter", next: "lead_capture" },
      { label: "Just Exploring", next: "lead_capture" },
    ],
  },

  // Flow 2
  flow2_q1: {
    message: "What are you trying to achieve?",
    options: [
      { label: "MCA Rule 11(g) Compliance", next: "flow2_q2" },
      { label: "SAP Audit Logging Review", next: "flow2_q2" },
      { label: "HANA DB Audit Logs", next: "flow2_q2" },
      { label: "Continuous Monitoring", next: "flow2_q2" },
      { label: "Prevent Log Tampering", next: "flow2_q2" },
      { label: "Audit Evidence Reporting", next: "flow2_q2" },
    ],
  },
  flow2_q2: {
    message: "What challenge are you facing today?",
    options: [
      { label: "Logs can be disabled", next: "flow2_q3" },
      { label: "No alerts when changed", next: "flow2_q3" },
      { label: "Manual evidence collection", next: "flow2_q3" },
      { label: "Auditor observations raised", next: "flow2_q3" },
      { label: "Need readiness review", next: "flow2_q3" },
    ],
  },
  flow2_q3: {
    message: "Which systems need coverage?",
    options: [
      { label: "SAP ECC", next: "lead_capture" },
      { label: "SAP S/4HANA", next: "lead_capture" },
      { label: "SAP HANA", next: "lead_capture" },
      { label: "Multiple Landscapes", next: "lead_capture" },
    ],
  },

  // Flow 3
  flow3_q1: {
    message: "What security visibility do you need?",
    options: [
      { label: "Privileged Access Monitoring", next: "flow3_q2" },
      { label: "Firefighter Activity Review", next: "flow3_q2" },
      { label: "Suspicious Transactions", next: "flow3_q2" },
      { label: "Unauthorized Changes", next: "flow3_q2" },
      { label: "Interface / RFC Risks", next: "flow3_q2" },
      { label: "Insider Threat Detection", next: "flow3_q2" },
      { label: "SOC Integration", next: "flow3_q2" },
    ],
  },
  flow3_q2: {
    message: "Do you already use a SIEM platform?",
    options: [
      { label: "Splunk", next: "flow3_q3" },
      { label: "Sentinel", next: "flow3_q3" },
      { label: "QRadar", next: "flow3_q3" },
      { label: "Other SIEM", next: "flow3_q3" },
      { label: "No SIEM", next: "flow3_q3" },
    ],
  },
  flow3_q3: {
    message: "How many SAP users approximately?",
    options: [
      { label: "Below 500", next: "lead_capture" },
      { label: "500–2,000", next: "lead_capture" },
      { label: "2,000–10,000", next: "lead_capture" },
      { label: "10,000+", next: "lead_capture" },
    ],
  },

  // Flow 4
  flow4_q1: {
    message: "What data needs protection?",
    options: [
      { label: "Customer Data", next: "flow4_q2" },
      { label: "Employee Data", next: "flow4_q2" },
      { label: "Vendor Data", next: "flow4_q2" },
      { label: "Financial Data", next: "flow4_q2" },
      { label: "Production Data in QA/DEV", next: "flow4_q2" },
      { label: "All Sensitive Data", next: "flow4_q2" },
    ],
  },
  flow4_q2: {
    message: "Where is masking required?",
    options: [
      { label: "Non-Production Systems", next: "flow4_q3" },
      { label: "Reports / Extracts", next: "flow4_q3" },
      { label: "HANA Database", next: "flow4_q3" },
      { label: "Entire SAP Landscape", next: "flow4_q3" },
    ],
  },
  flow4_q3: {
    message: "What is the driver?",
    options: [
      { label: "Compliance", next: "lead_capture" },
      { label: "Testing", next: "lead_capture" },
      { label: "Vendor Access", next: "lead_capture" },
      { label: "Privacy Program", next: "lead_capture" },
      { label: "Security Hardening", next: "lead_capture" },
    ],
  },

  // Flow 5
  flow5_q1: {
    message: "Which area do you need help with?",
    options: [
      { label: "DPDPA", next: "flow5_q2" },
      { label: "GDPR", next: "flow5_q2" },
      { label: "CCPA", next: "flow5_q2" },
      { label: "Consent Management", next: "flow5_q2" },
      { label: "Data Subject Requests", next: "flow5_q2" },
      { label: "Retention Policies", next: "flow5_q2" },
      { label: "Privacy Evidence", next: "flow5_q2" },
    ],
  },
  flow5_q2: {
    message: "Do you need SAP data included in scope?",
    options: [
      { label: "Yes", next: "flow5_q3" },
      { label: "No", next: "flow5_q3" },
      { label: "Need Guidance", next: "flow5_q3" },
    ],
  },
  flow5_q3: {
    message: "What stage are you in?",
    options: [
      { label: "Planning", next: "lead_capture" },
      { label: "Implementation", next: "lead_capture" },
      { label: "Audit Readiness", next: "lead_capture" },
      { label: "Immediate Requirement", next: "lead_capture" },
    ],
  },

  // Flow 6
  flow6_q1: {
    message: "Which solution would you like to see?",
    options: [
      { label: "TADS Protect", next: "flow6_q2" },
      { label: "Audit Trail Enforcer", next: "flow6_q2" },
      { label: "ThreatOps", next: "flow6_q2" },
      { label: "Data Masking", next: "flow6_q2" },
      { label: "Privacy Governance", next: "flow6_q2" },
      { label: "Full Product Overview", next: "flow6_q2" },
    ],
  },
  flow6_q2: {
    message: "Preferred timeline?",
    options: [
      { label: "This Week", next: "lead_capture_demo" },
      { label: "Next Week", next: "lead_capture_demo" },
      { label: "This Month", next: "lead_capture_demo" },
    ],
  },

  // Flow 7
  flow7_q1: {
    message: "Which product are you evaluating?",
    options: [
      { label: "TADS Protect", next: "flow7_q2" },
      { label: "Audit Trail Enforcer", next: "flow7_q2" },
      { label: "ThreatOps", next: "flow7_q2" },
      { label: "Data Masking", next: "flow7_q2" },
      { label: "Privacy Suite", next: "flow7_q2" },
    ],
  },
  flow7_q2: {
    message: "Approximate organization size?",
    options: [
      { label: "SMB", next: "lead_capture" },
      { label: "Mid-Market", next: "lead_capture" },
      { label: "Enterprise", next: "lead_capture" },
      { label: "Large Global Enterprise", next: "lead_capture" },
    ],
  },

  // Flow 8
  flow8_q1: {
    message:
      "Please share your requirement and our team will connect you with the right specialist.",
    options: [],
    isForm: true,
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "company", label: "Company", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      { name: "message", label: "Message", type: "textarea", required: true },
    ],
    next: "end",
  },

  // Lead Captures
  lead_capture: {
    message: "Please share your details:",
    options: [],
    isForm: true,
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "company", label: "Company", type: "text", required: true },
      { name: "email", label: "Work Email", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
    ],
    next: "end",
  },
  lead_capture_demo: {
    message: "Please share your details:",
    options: [],
    isForm: true,
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "company", label: "Company", type: "text", required: true },
      { name: "email", label: "Work Email", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      {
        name: "date",
        label: "Preferred Date/Time",
        type: "text",
        required: false,
      },
    ],
    next: "end",
  },
  end: {
    message:
      "Thank you for contacting ThreatSenseAI. Our team will review your requirement and get back to you shortly.",
    options: [],
  },
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNode, setCurrentNode] = useState("start");
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({});
  const messagesEndRef = useRef(null);

  // Initialize chat when opened for the first time
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { text: chatFlow["start"].message, isUser: false, node: "start" },
      ]);
    }
  }, [messages.length]);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, currentNode]);

  const handleOptionClick = (option) => {
    // Add user's selection to messages
    setMessages((prev) => [...prev, { text: option.label, isUser: true }]);

    // Move to next node
    const nextNodeKey = option.next;
    const nextNode = chatFlow[nextNodeKey];

    if (nextNode) {
      setTimeout(() => {
        setCurrentNode(nextNodeKey);
        setMessages((prev) => [
          ...prev,
          { text: nextNode.message, isUser: false, node: nextNodeKey },
        ]);
      }, 500); // Small delay for natural feel
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const node = chatFlow[currentNode];

    // Form validation
    let isValid = true;
    if (node.fields) {
      for (const field of node.fields) {
        if (field.required && !formData[field.name]) {
          isValid = false;
          alert(`Please fill in your ${field.label}`);
          break;
        }
      }
    }

    if (!isValid) return;

    // Send data to backend / API here
    console.log("Lead captured:", formData);

    if (node.isForm) {
      const chatHistory = messages
        .map((msg) => `${msg.isUser ? "User" : "Bot"}: ${msg.text}`)
        .join("\n");

      const payload = {
        ...formData,
        chatHistory: chatHistory,
      };

      try {
        const response = await fetch("/api/send-email.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const result = await response.json();
        console.log("Email sent status:", result);
      } catch (error) {
        console.error("Failed to send email:", error);
      }
    }

    // Show submitted data in chat as user message
    const submittedDataStr = "Form Submitted Successfully.";
    setMessages((prev) => [...prev, { text: submittedDataStr, isUser: true }]);

    // Move to next node (end)
    const nextNodeKey = node.next;
    const nextNode = chatFlow[nextNodeKey];

    if (nextNode) {
      setTimeout(() => {
        setCurrentNode(nextNodeKey);
        setFormData({}); // clear form
        setMessages((prev) => [
          ...prev,
          { text: nextNode.message, isUser: false, node: nextNodeKey },
        ]);
      }, 500);
    }
  };

  const renderOptions = () => {
    const node = chatFlow[currentNode];
    if (!node || !node.options || node.options.length === 0) return null;

    // Only render options if the latest message is from the bot and matches the current node
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.isUser) return null;

    return (
      <div className="chatbot-options">
        {node.options.map((opt, idx) => (
          <button
            key={idx}
            className="chatbot-option-btn"
            onClick={() => handleOptionClick(opt)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    );
  };

  const renderForm = () => {
    const node = chatFlow[currentNode];
    if (!node || !node.isForm) return null;

    // Only render form if the latest message is from the bot
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.isUser) return null;

    return (
      <form className="chatbot-lead-form" onSubmit={handleFormSubmit}>
        {node.fields.map((field, idx) => (
          <div key={idx} className="form-group">
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                placeholder={field.label}
                value={formData[field.name] || ""}
                onChange={handleFormChange}
                required={field.required}
                rows="3"
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                value={formData[field.name] || ""}
                onChange={handleFormChange}
                required={field.required}
              />
            )}
          </div>
        ))}
        <button type="submit" className="submit-lead-btn">
          Submit
        </button>
      </form>
    );
  };

  const restartChat = () => {
    setCurrentNode("start");
    setMessages([
      { text: chatFlow["start"].message, isUser: false, node: "start" },
    ]);
    setFormData({});
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      {!isOpen && (
        <button
          className="chatbot-toggle-btn"
          onClick={toggleChat}
          aria-label="Open chat"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>ThreatSense Support</h4>
            <div className="chatbot-header-actions">
              <button
                className="chatbot-restart-btn"
                onClick={restartChat}
                aria-label="Restart chat"
                title="Restart Chat"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <polyline points="23 20 23 14 17 14"></polyline>
                  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                </svg>
              </button>
              <button
                className="chatbot-close-btn"
                onClick={toggleChat}
                aria-label="Close chat"
              >
                &times;
              </button>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.isUser ? "user" : "bot"}`}
              >
                <p>{msg.text}</p>
              </div>
            ))}

            {renderOptions()}
            {renderForm()}

            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
