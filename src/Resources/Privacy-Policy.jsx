import React, { useEffect } from 'react';
import "../css/Resources.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='privacy-policy-container'>
      <div className='privacy-policy-header'>
        <h1 className="head-text">Privacy Policy</h1>
      </div>

      <div className='privacy-policy-content'>
        <p className="para-text">
          ThreatSense AI (“ThreatSense AI”, “we”, “us”, or “our”) respects your privacy and is committed to protecting personal information collected through <a href="https://www.threatsenseai.com">www.threatsenseai.com</a> and related interactions. This Privacy & Cookie Policy explains how personal data is collected, used, disclosed, and protected, including the use of cookies and similar technologies.
        </p>

        <p className="para-text">
          ThreatSense AI operates globally, with offices and service delivery across multiple jurisdictions, including India, Singapore, the United Kingdom, and the United States. This Policy is intended to apply globally and in accordance with applicable data protection and privacy laws.
        </p>

        <section>
          <h2 className="sub-head-text">Scope of This Policy</h2>
          <p className="para-text">
            This Policy applies to personal data collected through our Website, contact forms, content downloads (including case studies and whitepapers), marketing communications, business interactions, and related online activities. It does not apply to third-party websites or services that may be linked from our Website.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Personal Data We Collect</h2>
          <p className="para-text">
            We collect personal data that you voluntarily provide, such as your name, business email address, phone number, organization, job title, country, and any information submitted through forms or communications.
          </p>
          <p className="para-text">
            We may also collect technical data, including IP address, browser type, device information, pages visited, and usage patterns, collected automatically when you interact with our Website.
          </p>
          <p className="para-text">
            We do not knowingly collect sensitive personal data or information relating to children.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">How We Use Personal Data</h2>
          <p className="para-text">
            Personal data is used to respond to inquiries, provide requested content or services, manage client and prospect relationships, send relevant communications, improve our Website and offerings, comply with legal obligations, and protect the security and integrity of our systems.
          </p>
          <p className="para-text">
            We do not sell personal data.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Legal Basis for Processing</h2>
          <p className="para-text">
            Personal data is processed in accordance with applicable law based on one or more lawful grounds, including contractual necessity, legitimate business interests, legal obligations, or consent where required. Where consent is relied upon, it may be withdrawn at any time.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Marketing Communications</h2>
          <p className="para-text">
            If you engage with ThreatSense AI or download content, we may send you communications related to our services, insights, or events.
          </p>
          <p className="para-text">
            You may opt out of marketing communications at any time using the unsubscribe mechanism or by contacting us directly. Operational or service-related communications may still be sent where necessary.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Data Sharing and Disclosure</h2>
          <p className="para-text">
            Personal data may be shared with ThreatSense AI affiliates and trusted third-party service providers who assist with Website hosting, analytics, communications, marketing platforms, CRM systems, and service delivery. Such parties are contractually obligated to protect personal data and use it only for authorized purposes.
          </p>
          <p className="para-text">
            Personal data may also be disclosed where required by law, regulation, legal process, or to protect ThreatSense AI’s rights and interests.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Cross-Border Data Transfers</h2>
          <p className="para-text">
            As a global organization, ThreatSense AI may process personal data in multiple countries. Where personal data is transferred across borders, appropriate legal safeguards are implemented in accordance with applicable data protection laws, including contractual protections and recognized transfer mechanisms.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Data Security</h2>
          <p className="para-text">
            ThreatSense AI implements reasonable technical and organizational measures designed to protect personal data against unauthorized access, loss, misuse, or disclosure. While industry-recognized security practices are followed, no system can be guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Data Retention</h2>
          <p className="para-text">
            Personal data is retained only for as long as necessary to fulfill the purposes for which it was collected, comply with legal or contractual obligations, and enforce agreements.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Your Rights</h2>
          <p className="para-text">
            Depending on your jurisdiction, you may have rights to access, correct, delete, restrict, or object to the processing of your personal data.
          </p>
          <p className="para-text">
            Requests will be handled in accordance with applicable law and within required timelines.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Data Breach Notification</h2>
          <p className="para-text">
            In the event of a confirmed personal data breach, ThreatSense AI will take appropriate remedial action and notify affected parties and authorities as required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Children’s Privacy</h2>
          <p className="para-text">
            Our Website and Services are not intended for individuals under the age required by applicable law. We do not knowingly collect personal data from children.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Changes to This Policy</h2>
          <p className="para-text">
            ThreatSense AI may update this Privacy Policy from time to time to reflect changes in legal requirements, business practices, or technology.
          </p>
        </section>
      </div>
    </div>
  );
}
