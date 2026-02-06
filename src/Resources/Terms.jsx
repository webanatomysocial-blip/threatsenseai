import React, { useEffect } from 'react';
import "../css/Resources.css";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='privacy-policy-container'>
      <div className='privacy-policy-header'>
        <h1 className="head-text">Terms & Conditions</h1>
      </div>

      <div className='privacy-policy-content'>
        <section>
          <p className="para-text">
            These Terms & Conditions (“Terms”) govern your access to and use of the website
            www.threatsenseai.com (the “Website”) and any products, platforms, software,
            solutions, or services (collectively, the “Services”) offered by ThreatSense Ai
            (“ThreatSense Ai”, “we”, “us”, or “our”).
          </p>

          <p className="para-text">
            ThreatSense Ai operates globally, with offices and service delivery capabilities
            across multiple jurisdictions, including India, Singapore, the United Kingdom,
            and the United States. These Terms are intended to apply uniformly across
            geographies, subject to applicable local laws and any written agreements entered
            into with ThreatSense Ai.
          </p>

          <p className="para-text">
            By accessing, browsing, or using this Website or our Services, you confirm that
            you have read, understood, and agreed to be bound by these Terms. If you do not
            agree, you must immediately discontinue use.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Use of Website and Services</h2>
          <p className="para-text">
            You may use the Website solely for lawful purposes and in accordance with these
            Terms. You agree not to misuse the Website or Services in a manner that could
            damage, disable, overburden, or impair ThreatSense Ai’s systems, security posture,
            or intellectual property. Any attempt to gain unauthorized access, introduce
            malicious code, interfere with system operations, or misrepresent affiliation
            with ThreatSense Ai is strictly prohibited.
          </p>

          <p className="para-text">
            ThreatSense Ai reserves the right to suspend or restrict access to the Website or
            Services where continued use poses legal, security, or compliance risks.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Services and Contractual Relationship</h2>
          <p className="para-text">
            ThreatSense Ai provides enterprise technology services including SAP Security and
            GRC solutions, automation and analytics platforms, AI-enabled products,
            cybersecurity and data protection solutions, as well as consulting,
            implementation, managed services, and support in SAP and other technologies.
          </p>

          <p className="para-text">
            The information provided on this Website is for general informational purposes
            only and does not constitute a binding commercial offer. Any engagement for
            Services shall be governed by written agreements such as a Master Services
            Agreement, Statement of Work, Data Processing Agreement, or other enterprise
            procurement documents executed between ThreatSense Ai and the client. In the
            event of any inconsistency, the terms of such written agreements shall prevail
            over these Website Terms.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Intellectual Property</h2>
          <p className="para-text">
            All content, software, designs, methodologies, trademarks, logos, documentation,
            and other materials made available through the Website or Services are the
            exclusive intellectual property of ThreatSense Ai or its licensors. Nothing in
            these Terms grants you ownership or any proprietary interest in such intellectual
            property.
          </p>

          <p className="para-text">
            Subject to contractual agreement, clients are granted a limited, non-exclusive,
            non-transferable right to use deliverables solely for their internal business
            purposes. Any copying, modification, reverse engineering, resale, sublicensing,
            or creation of derivative works without prior written consent is prohibited.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Data Protection and Privacy</h2>
          <p className="para-text">
            ThreatSense Ai is committed to protecting personal data and processes information
            in accordance with applicable global data protection and privacy laws, including
            GDPR, UK GDPR, the Digital Personal Data Protection Act (India), the Singapore
            PDPA, and relevant United States privacy regulations where applicable.
          </p>

          <p className="para-text">
            Depending on the nature of the engagement, ThreatSense Ai may act as a data
            processor, service provider, or data controller. Personal data is processed only
            for lawful purposes, based on contractual necessity, legal obligation, legitimate
            business interest, or consent where required.
          </p>

          <p className="para-text">
            Further details regarding personal data processing are available in ThreatSense
            Ai’s Privacy Policy and applicable Data Processing Agreements.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">Disclaimers and Limitation of Liability</h2>
          <p className="para-text">
            The Website and Services are provided on an “as is” and “as available” basis.
            ThreatSense Ai makes no warranties regarding accuracy, completeness, availability,
            or fitness for a particular purpose.
          </p>

          <p className="para-text">
            To the maximum extent permitted by applicable law, ThreatSense Ai shall not be
            liable for any indirect, incidental, special, or consequential damages arising
            from use of the Website or Services.
          </p>
        </section>

        {/* <section>
          <h2 className="sub-head-text">Contact Information</h2>
          <p className="para-text">
            For legal, privacy, or compliance-related inquiries, please contact:
          </p>

          <p className="para-text">
            ThreatSense Ai – Legal & Privacy Office<br />
            Email: legal@threatsenseai.com<br />
            Website: www.threatsenseai.com
          </p>
        </section> */}
      </div>
    </div>
  );
}
