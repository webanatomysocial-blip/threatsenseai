import React, { useEffect } from 'react';
import "../css/Resources.css";

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='privacy-policy-container'>
      <div className='privacy-policy-header'>
        <h1 className="head-text">Cookie Policy</h1>
      </div>

      <div className='privacy-policy-content'>
        <section>
          <h2 className="sub-head-text">Cookies and Similar Technologies</h2>
          <p className="para-text">
            Our Website uses cookies and similar technologies to ensure functionality, enhance user experience, analyze Website performance, and support marketing activities.
          </p>
          <p className="para-text">
            Cookies are small text files placed on your device when you visit a website. Some cookies are essential for the Website to function properly, while others help us understand how visitors interact with the Website or support marketing and analytics activities.
          </p>
          <p className="para-text">
            Where required by law, we obtain consent before placing non-essential cookies. You may manage or disable cookies through your browser settings. Disabling certain cookies may affect Website functionality.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Types of Cookies Used</h2>
          <p className="para-text">
            We may use a combination of essential cookies (required for Website operation), performance and analytics cookies (to understand Website usage and improve performance), and marketing or advertising cookies (to support communications and measure campaign effectiveness).
          </p>
          <p className="para-text">
            Third-party service providers may place cookies on our behalf, subject to appropriate safeguards.
          </p>
        </section>
      </div>
    </div>
  );
}
