import React from "react";
import BlogLayout from "../components/BlogLayout";
import FAQ from "../components/FAQ";
import heroImage from "./caseStudiesImages/1.avif";

const faqItems = [
  {
    question: "Does Audit Trail Enforcer help with 21 CFR Part 11 and ALCOA+, or just MCA Rule 11(g)?",
    answer: "Both. Audit Trail Enforcer is engineered around MCA Rule 11(g), but the same enforcement controls – continuous logging, tamper detection, attribution of every change to a named user, hash-chained log preservation – directly support the audit-trail and data-integrity requirements of 21 CFR Part 11, the FDA's data-integrity guidance, EU GMP Annex 11, and the MHRA / WHO data-integrity guidance. The ALCOA+ mapping in this case study shows the principle-by-principle alignment."
  },
  {
    question: "We are on SAP ECC and planning an S/4HANA migration. Will Audit Trail Enforcer work in both places?",
    answer: "Yes. Audit Trail Enforcer is deployed at the SAP Application layer and the database layer; it works on ECC today (with Microsoft SQL Server, Oracle, or DB2) and on S/4HANA when you migrate (with HANA at the DB layer). The migration does not require redeploying the audit-trail control – the policies and evidence pack carry forward."
  },
  {
    question: "Will Audit Trail Enforcer break our SAP support or our CSV-validated state?",
    answer: "No. Audit Trail Enforcer does not modify standard SAP components and does not break SAP support entitlements. Its deployment is documented to support the Customer's existing computer system validation (CSV) framework, with IQ / OQ / PQ artefacts produced as part of Phase 3 of the standard rollout."
  },
  {
    question: "How long must we retain audit-trail records?",
    answer: "Under Indian law, Section 128(5) of the Companies Act, 2013 requires books of account and related records (which include audit-trail records) to be retained for at least 8 financial years. For pharma, predicate FDA rules such as 21 CFR § 211.180 set their own retention windows for batch and quality records, typically 1 year past the labelled expiration date or longer. Audit Trail Enforcer supports retention windows up to and beyond both requirements."
  }
];

const HardeningAuditTrailsPharma = ({ dynamicRecentPosts }) => {
  const content = (
    <>
      <section>
        <p>How a leading Indian pharmaceutical manufacturer turned its SAP ECC 6.0 EHP 8 audit trail from a compliance liability into an automated, ALCOA+-aligned control – satisfying both MCA Rule 11(g) for the statutory auditor and 21 CFR Part 11 expectations for FDA / MHRA inspection – with ThreatSense AI's Audit Trail Enforcer.</p>
      </section>

      <section>
        <h2>AT A GLANCE</h2>
        <ul>
          <li><strong>Customer:</strong> A listed Indian pharmaceutical manufacturer with formulations and API operations</li>
          <li><strong>Scale (FY 2025–26):</strong> Annual turnover above ₹2,000 crore; sales growth in high single digits over the past five years; low-leverage, near-debt-free balance sheet</li>
          <li><strong>Landscape:</strong> SAP ECC 6.0 EHP 8 on Microsoft SQL Server – single ECC instance supporting Finance, Materials Management, Production, Quality Management, and Sales & Distribution across multiple plants</li>
          <li><strong>Compliance Mandate:</strong> MCA Rule 11(g) for statutory audit; 21 CFR Part 11 and ALCOA+ for FDA / MHRA / WHO inspection; EU GMP Annex 11 for European market filings</li>
          <li><strong>Solution:</strong> ThreatSense AI Audit Trail Enforcer – deployed at the SAP Application layer and on the SQL Server database, without disrupting the ECC support model or the customer's S/4HANA migration plan</li>
          <li><strong>Outcome:</strong> Six previously-uncontrolled audit trail risks now have automated, real-time controls; eleven audit-grade capabilities the standard SAP method does not provide; data integrity controls now demonstrably aligned with ALCOA+ principles</li>
        </ul>
      </section>

      <section>
        <h2>Executive Summary</h2>
        <p>
          The Customer is a listed Indian pharmaceutical manufacturer with annual turnover above ₹2,000 crore, a steady five-year sales-growth track record in the high single digits, and a low-leverage, near-debt-free balance sheet. The company runs SAP ECC 6.0 EHP 8 on Microsoft SQL Server – a single ECC instance supporting Finance, Materials Management, Production, Quality Management, and Sales & Distribution across multiple plants.
        </p>
        <p>
          Pharmaceutical manufacturers face an unusually demanding audit-trail regime. MCA Rule 11(g) of the Companies (Audit and Auditors) Rules, 2014 requires the statutory auditor to comment specifically on whether the audit trail (edit log) feature was operational throughout the year, whether it was tampered with, and whether it has been preserved per Section 128(5). On top of that, US FDA 21 CFR Part 11, the FDA's data-integrity guidance, EU GMP Annex 11, the MHRA data-integrity guidance, and the WHO good data and record-management practices all demand that electronic records meet the ALCOA+ principles – Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent, Enduring, and Available. Between 2017 and 2022, the FDA issued more than 160 Warning Letters to pharmaceutical manufacturers citing data-integrity deficiencies. Audit-trail review gaps are at the centre of that pattern.
        </p>
        <p>
          In a Rule 11(g) review of the Customer's ECC landscape – carried out in parallel with an internal data-integrity assessment – six structural audit-trail risks were identified for which the standard SAP method offered no automated control, and eleven audit-grade capabilities were found to be entirely absent. The Customer engaged ThreatSense AI to deploy the Audit Trail Enforcer at both the SAP Application layer and the SQL Server database layer. The result: every one of the six risks now has an automated, real-time control; every one of the eleven capabilities is now in place; and the audit trail is now demonstrably continuous, tamper-proof, and ALCOA+-aligned – satisfying the statutory auditor under MCA Rule 11(g) and the inspector under 21 CFR Part 11 from a single control plane.
        </p>
      </section>

      <section>
        <h2>Customer Profile</h2>
        <p>
          The Customer is a publicly listed Indian pharmaceutical manufacturer producing formulations and active pharmaceutical ingredients (APIs) for domestic and regulated export markets, including the United States, the United Kingdom, the European Union, and emerging markets. Selected operating context for the engagement:
        </p>
        <ul>
          <li>Annual turnover above ₹2,000 crore.</li>
          <li>Sales growth in the high single digits over the past five years.</li>
          <li>A low-leverage, near-debt-free balance sheet, with operations and capital expansion funded internally.</li>
          <li>SAP ECC 6.0 EHP 8 on Microsoft SQL Server, with multiple manufacturing plants and a tight integration to laboratory and quality systems for batch release.</li>
        </ul>
        <p>
          This profile creates a specific compliance posture: the company is too large and too export-exposed to treat data integrity as a compliance afterthought, but it is on ECC – a platform whose mainstream SAP support has a known runway. Any audit-trail control put in place today must work on ECC now and must not get in the way of the eventual S/4HANA migration.
        </p>
      </section>

      <section>
        <h2>The Compliance Challenge: Two Regulators, One Audit Trail</h2>
        <p>
          For an Indian pharmaceutical manufacturer with regulated-market exposure, audit-trail compliance is read by two very different audiences:
        </p>
        <h3>The statutory auditor (MCA Rule 11(g))</h3>
        <p>
          The auditor is required to comment specifically on whether the audit trail feature in the company's accounting software was operational throughout the year, whether it was tampered with, and whether it has been preserved per Section 128(5) of the Companies Act, 2013 – which mandates retention of books of account (and the audit trail records that form part of them) for at least 8 financial years. Failure to satisfy Rule 11(g) results in a modified opinion that is read by lenders, rating agencies, and the audit committee.
        </p>
        <h3>The inspector (21 CFR Part 11, EU GMP Annex 11, MHRA, WHO)</h3>
        <p>
          FDA and other regulated-market inspectors examine audit trails for compliance with 21 CFR Part 11 – specifically that records are computer-generated, time-stamped, secure, attributable, and protected from unauthorized modification – and assess whether the underlying data meets the ALCOA+ principles. SAP ECC sits in scope wherever it is part of the GMP-relevant electronic-record chain: financial postings tied to batch release, materials movements connected to GMP-critical inventory, master data such as vendor and material that flows into manufacturing. A finding here is not just a Warning Letter; it can delay or jeopardise market authorization.
        </p>
        <p>
          The same SAP ECC system underlies both reviews. The same audit-trail gaps that fail Rule 11(g) also fail Part 11 – and they fail in exactly the places SAP itself acknowledges in SAP Note 3042258 (Maintenance of audit trail – Statutory Requirement – 1st April 2023, India): audit logging is enabled by configuration, but it is not enforced as a control. It can be disabled. It can be edited. It can be bypassed in DEBUG mode. The technical capability is there; the assurance is not.
        </p>
      </section>

      <section>
        <h2>Six Audit Trail Risks the Standard SAP Method Cannot Address</h2>
        <p>
          During the joint Rule 11(g) and data-integrity review of the Customer's SAP ECC + SQL Server landscape, six specific audit-trail risks were identified. For each, the standard SAP method offered no automated control – and each one would be flagged by either the statutory auditor or a regulated-market inspector if surfaced during inspection.
        </p>
        
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: "35%" }}>Audit Trail Risk</th>
                <th style={{ width: "25%" }}>Manual / Standard SAP</th>
                <th style={{ width: "40%" }}>ThreatSense AI Control (Audit Trail Enforcer)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Disabling audit policies / logs at Application or DB level</td>
                <td>No Control</td>
                <td>Audit policies and logs are re-enabled automatically the moment they are disabled.</td>
              </tr>
              <tr>
                <td>Deletion of audit policies in HANA DB</td>
                <td>No Control</td>
                <td>Deleted audit policies are recreated automatically and re-enabled – no window of non-coverage.</td>
              </tr>
              <tr>
                <td>Tampering of audit trail records in DB</td>
                <td>No Control</td>
                <td>Logs are restored automatically using the last clean execution timestamp; tamper attempts raise an incident.</td>
              </tr>
              <tr>
                <td>Changes to CDHDR / CDPOS made in DEBUG mode</td>
                <td>No Control</td>
                <td>Captures the change, blocks the user from the application, and sends a notification email – in real time.</td>
              </tr>
              <tr>
                <td>Disabling SM19 / SM20 audit logs</td>
                <td>No Control</td>
                <td>SM19 audit logs are re-activated automatically when disabled.</td>
              </tr>
              <tr>
                <td>Disabling change logs on critical tables</td>
                <td>No Control</td>
                <td>Disabling is reported immediately as an incident / case in the Customer's ITSM.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The cumulative risk is the point that matters: any single one of these six gaps is enough for an auditor or inspector to question the integrity of the entire audit trail. The DEBUG-mode bypass on CDHDR / CDPOS is particularly acute for pharma – it directly attacks the “Attributable” and “Contemporaneous” principles of ALCOA+, and it cannot be detected through any standard SAP reporting.
        </p>
      </section>

      <section>
        <h2>The Solution: Audit Trail Enforcer</h2>
        <p>
          Audit Trail Enforcer is built specifically for MCA Rule 11(g) and the audit-trail expectations of regulated Indian enterprises. For a pharmaceutical manufacturer, its value extends beyond Rule 11(g): the same enforcement layer that satisfies the statutory auditor also addresses the audit-trail and data-integrity requirements of 21 CFR Part 11, ALCOA+, EU GMP Annex 11, and MHRA / WHO data-integrity guidance.
        </p>
        <p>
          Audit Trail Enforcer was deployed alongside the Customer's SAP ECC 6.0 EHP 8 environment at two layers – the SAP Application layer and the Microsoft SQL Server database layer – and operates as an always-on enforcement control rather than a passive log reader. Three architectural convictions shaped the deployment:
        </p>
        <ul>
          <li><strong>Audit trails must enforce themselves.</strong> If logging can be turned off, it will be. Audit Trail Enforcer re-enables logs and recreates audit policies the moment they are disabled or deleted at the SAP Application or SQL Server layer.</li>
          <li><strong>Tamper-proof must mean tamper-proof.</strong> Audit Trail Enforcer keeps an independent, hash-chained record of audit events outside the privileged DBA's reach; tamper attempts on the SQL Server audit logs are detected and the records are automatically restored.</li>
          <li><strong>DEBUG-mode is the auditor's blind spot.</strong> SAP's standard CDHDR / CDPOS change documents do not always capture changes made via DEBUG. Audit Trail Enforcer does – and blocks the user from the application immediately, with a notification email to Internal Audit and Quality.</li>
        </ul>
      </section>

      <section>
        <h2>Why ThreatSense AI Over the Standard SAP Method</h2>
        <p>
          Before engaging ThreatSense AI, the Customer's IT team had implemented SAP Note 3042258 in full, tightened SAP authorizations around audit-relevant transaction codes, and established a standard SQL Server audit specification at the database layer. That is the path most Indian SAP customers take – and it is the path that leaves the eleven audit-grade capabilities below entirely uncovered.
        </p>

        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Audit-Grade Capability</th>
                <th style={{ width: "25%", textAlign: "center" }}>Standard SAP Method</th>
                <th style={{ width: "25%", textAlign: "center" }}>ThreatSense AI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Detect log tampering</td>
                <td style={{ color: "red", textAlign: "center" }}>&#10008;</td>
                <td style={{ color: "green", textAlign: "center" }}>&#10004;</td>
              </tr>
              <tr>
                <td>Monitor critical DB logins</td>
                <td style={{ color: "red", textAlign: "center" }}>&#10008;</td>
                <td style={{ color: "green", textAlign: "center" }}>&#10004;</td>
              </tr>
              <tr>
                <td>DDL / DML growth (DB footprint) optimization</td>
                <td style={{ color: "red", textAlign: "center" }}>&#10008;</td>
                <td style={{ color: "green", textAlign: "center" }}>&#10004;</td>
              </tr>
              <tr>
                <td>Real-time alerts such as changes made in DEBUG</td>
                <td style={{ color: "red", textAlign: "center" }}>&#10008;</td>
                <td style={{ color: "green", textAlign: "center" }}>&#10004;</td>
              </tr>
              <tr>
                <td>Activating SM19 logs automatically when disabled</td>
                <td style={{ color: "red", textAlign: "center" }}>&#10008;</td>
                <td style={{ color: "green", textAlign: "center" }}>&#10004;</td>
              </tr>
              <tr>
                <td>Incident logging via ITSM integration</td>
                <td style={{ color: "red", textAlign: "center" }}>&#10008;</td>
                <td style={{ color: "green", textAlign: "center" }}>&#10004;</td>
              </tr>
              <tr>
                <td>Monitor changes in critical tables at both Application and DB level</td>
                <td style={{ color: "red", textAlign: "center" }}>&#10008;</td>
                <td style={{ color: "green", textAlign: "center" }}>&#10004;</td>
              </tr>
              <tr>
                <td>Protecting evidence from potential tampering</td>
                <td style={{ color: "red", textAlign: "center" }}>&#10008;</td>
                <td style={{ color: "green", textAlign: "center" }}>&#10004;</td>
              </tr>
              <tr>
                <td>Automated remedial actions (e.g., locking the user)</td>
                <td style={{ color: "red", textAlign: "center" }}>&#10008;</td>
                <td style={{ color: "green", textAlign: "center" }}>&#10004;</td>
              </tr>
              <tr>
                <td>Protecting CDHDR and CDPOS tables</td>
                <td style={{ color: "red", textAlign: "center" }}>&#10008;</td>
                <td style={{ color: "green", textAlign: "center" }}>&#10004;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Eleven capabilities. Zero coverage from the standard SAP method. Full coverage from ThreatSense AI. For a pharmaceutical manufacturer preparing for both the statutory auditor and the next FDA inspection, the gap between standard logging and enforced logging is the difference between defending the audit trail and demonstrating it.
        </p>
      </section>

      <section>
        <h2>Mapping Audit Trail Enforcer to ALCOA+ Data Integrity Principles</h2>
        <p>
          ALCOA+ is the framework FDA, MHRA, and WHO inspectors use to assess whether electronic records can be trusted. For SAP ECC running pharma-relevant transactions, the underlying data – not just the audit trail – must satisfy each of the nine ALCOA+ principles. Audit Trail Enforcer's controls map to them as follows:
        </p>

        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>ALCOA+ Principle</th>
                <th style={{ width: "30%" }}>What It Demands</th>
                <th style={{ width: "50%" }}>How Audit Trail Enforcer Supports It on SAP ECC + SQL Server</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Attributable</strong></td>
                <td>Every action linked to an identified user</td>
                <td>Captures the SAP user behind every change at both Application and DB layers – including DEBUG-mode changes that bypass standard CDHDR / CDPOS attribution.</td>
              </tr>
              <tr>
                <td><strong>Legible</strong></td>
                <td>Records readable and permanent</td>
                <td>Auditor-friendly, present audit trails in human-readable form, mapped to business objects (purchase orders, batch records, GL postings) rather than raw table keys.</td>
              </tr>
              <tr>
                <td><strong>Contemporaneous</strong></td>
                <td>Recorded at the time the activity occurs</td>
                <td>Real-time enforcement at SQL Server and SAP Application layers; tamper attempts and DEBUG-mode changes alert and respond within seconds, not at end-of-day batch.</td>
              </tr>
              <tr>
                <td><strong>Original</strong></td>
                <td>First-capture record preserved</td>
                <td>Logs are stored independently of the SQL Server instance that produced them, so the original record survives even if the source DB is altered or restored from a manipulated backup.</td>
              </tr>
              <tr>
                <td><strong>Accurate</strong></td>
                <td>Free from error or unauthorized change</td>
                <td>Hash-chained log records detect tampering; auto-restoration ensures the audit trail accurately reflects what actually happened, not what someone wanted it to show.</td>
              </tr>
              <tr>
                <td><strong>Complete</strong></td>
                <td>Including all data, repeats, anomalies</td>
                <td>Coverage extends to SM19 / SM20 application logs, CDHDR / CDPOS change documents, and SQL Server audit log – any one of which, disabled in isolation, would break completeness.</td>
              </tr>
              <tr>
                <td><strong>Consistent</strong></td>
                <td>Recorded in expected sequence with timestamps</td>
                <td>Synchronized timestamping across SAP Application and SQL Server layers; ITSM-integrated incidents create a single chronological record an inspector can follow.</td>
              </tr>
              <tr>
                <td><strong>Enduring</strong></td>
                <td>Retained for the required period</td>
                <td>Retention aligned to Section 128(5) of the Companies Act (8 years) and 21 CFR § 211.180 record-retention windows; logs preserved in a write-once store separate from operational backups.</td>
              </tr>
              <tr>
                <td><strong>Available</strong></td>
                <td>Retrievable for the entire retention period</td>
                <td>Auditor and inspector can retrieve through console to view the logs directly.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          This mapping matters in inspection. A 21 CFR Part 11 inspector does not ask “did you implement SAP Note 3042258?” – they ask “show me how the audit trail satisfies ALCOA+.” The Customer can now show, principle by principle, where the control sits, how it is enforced, and what evidence is produced.
        </p>
      </section>

      <section>
        <h2>Deployment on SAP ECC 6.0 EHP 8 + SQL Server</h2>
        <p>
          Audit Trail Enforcer was deployed in a structured, four-phase rollout co-led by ThreatSense AI and the Customer's SAP Basis, Internal Audit, IT Quality (CSV / GxP IT), and Information Security teams. Quality Assurance was involved from Phase 1 to ensure changes met validation expectations under the Customer's existing computer system validation framework.
        </p>
        <ul>
          <li><strong>Phase 1 – Discovery & Scoping.</strong> Inventory of financially relevant and GxP-relevant tables (BKPF / BSEG, CDHDR / CDPOS, MSEG, MARA, batch master, vendor master), the privileged user population at the SAP Application and SQL Server layers, and the existing SM19 / SM20 and SQL Server audit specification footprint. Output: a combined Rule 11(g) and Part 11 gap register reviewed with the statutory auditor's IT-audit lead and the Customer's QA Head.</li>
          <li><strong>Phase 2 – Deployment.</strong> Audit Trail Enforcer enforcement components installed at the SAP Application layer and adjacent to the SQL Server database. Audit policies hardened, SM19 baseline locked in, change-document protection extended to CDHDR / CDPOS – all without modifying standard SAP components and without breaking SAP support entitlements or the Customer's CSV-validated state.</li>
          <li><strong>Phase 3 – Policy Tuning & Validation.</strong> DDL / DML log growth tuned to keep the SQL Server footprint manageable while still capturing every transaction in scope of Rule 3(1) and every GxP-relevant change in scope of Part 11. False-positive rate on tamper alerts driven below 1%. ITSM integration configured. Validation evidence (IQ / OQ / PQ artefacts) produced for the Customer's CSV records.</li>
          <li><strong>Phase 4 – Audit & Inspection Dress Rehearsal.</strong> Mock Rule 11(g) walkthrough with the statutory auditor's team using Audit Trail Enforcer’s capabilities, plus a mock Part 11 / ALCOA+ walkthrough with the QA team using the same evidence pack. All six original audit-trail risks formally retired in writing.</li>
        </ul>
      </section>

      <section>
        <h2>Results: One Control Plane, Two Regulators Satisfied</h2>
        <p>
          Within weeks of go-live, the Customer's audit-trail posture changed from “best-effort, manually defended” to “automatically enforced, demonstrably continuous, ALCOA+-aligned.” Three specific outcomes stand out:
        </p>
        <h3>1. The statutory auditor's evidence request takes minutes, not weeks</h3>
        <p>
          The Rule 11(g) evidence pack – continuous-operation attestation, tamper-check report, retention proof, exception register – is generated from the Audit Trail Enforcer Compliance Console on demand, aligned to the ICAI Implementation Guide for Rule 11(g). Internal Audit no longer assembles screenshots and scripts manually.
        </p>
        <h3>2. The Part 11 / ALCOA+ inspection story is the same evidence, told differently</h3>
        <p>
          The same audit-trail records that satisfy the statutory auditor satisfy the FDA / MHRA inspector – framed against the nine ALCOA+ principles rather than the four Rule 11(g) clauses. QA can walk an inspector through Attributable, Contemporaneous, Original, Enduring and Available data integrity principles through a unified solution. One control plane. Two reviews. No duplicated evidence-gathering effort.
        </p>
        <h3>3. The DEBUG-mode blind spot is closed</h3>
        <p>
          Privileged SAP Basis administrators and SQL Server DBAs can no longer silently disable audit policies, delete logs, or modify CDHDR / CDPOS via DEBUG mode without being detected and reverted in real time. For a pharmaceutical manufacturer where DEBUG-mode bypass directly attacks ALCOA+ Attributability, this is the single most consequential change.
        </p>

        <h3>Customer Voice</h3>
        <blockquote style={{ fontStyle: "italic", borderLeft: "4px solid #ccc", paddingLeft: "15px", margin: "20px 0" }}>
          “We were preparing for two reviews on the same SAP system – the statutory auditor under Rule 11(g) and an inspection under 21 CFR Part 11. ThreatSense AI gave us one enforcement layer that answers both. The audit trail is no longer something we defend; it is something the system maintains, and the evidence is ready when either reviewer asks.”
          <br /><br />
          <strong>— Senior IT & Compliance Leader, The Customer</strong>
        </blockquote>
      </section>

      <section>
        <h2>If You Run SAP in Indian Pharma, This Applies to You</h2>
        <p>
          Every Indian pharmaceutical manufacturer running SAP for finance and GxP-adjacent transactions faces the same six audit-trail risks listed in this case study. SAP Note 3042258 does not close them. SQL Server audit specifications do not close them. Tighter SAP authorizations do not close them. Manual reviews – the path most companies still take – do not scale to the FDA's expectation of contemporaneous, attributable, tamper-proof records.
        </p>
        <p>
          The cost of not having an enforced audit trail compounds quietly. Every quarter without it is another quarter of evidence the statutory auditor will ask for under Rule 11(g). Every inspection cycle is another opportunity for a Form 483 observation, an MHRA finding, or a Warning Letter citing data integrity. Every regulated-market filing depends on data the inspector can trust – and trust, under ALCOA+, has to be demonstrated, not asserted.
        </p>
        <p>
          ThreatSense AI's Audit Trail Enforcer is built for this exact problem. It works on SAP ECC today, on SAP S/4HANA when you migrate, and at both Application and database layers (Microsoft SQL Server, HANA, or Oracle). It is designed for the realities of Indian pharma audit and inspection cycles – month-end financial close, batch release windows, regulator surprise visits, and the eight-year retention obligation under Section 128(5). The Customer in this case study chose not to wait for the next finding. The same option is available to you.
        </p>
      </section>

      <section>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <FAQ items={faqItems} isBlog={true} />
      </section>

      <section>
        <h2>About ThreatSense AI</h2>
        <p>
          ThreatSense AI builds AI-driven security and compliance products for regulated enterprises. The Audit Trail Enforcer is built specifically to deliver MCA Rule 11(g) audit-trail compliance for Indian listed companies and large private companies running SAP, with native support for the data-integrity expectations of 21 CFR Part 11, ALCOA+, EU GMP Annex 11, and the MHRA / WHO data-integrity guidance. Audit Trail Enforcer is deployed across pharmaceuticals, petrochemicals, banking, and infrastructure. To request a Rule 11(g) and Part 11 readiness assessment, a SAP ECC / S/4HANA audit-trail gap analysis, or a 30-minute Audit Trail Enforcer walkthrough, visit threatsenseai.com or contact your account team.
        </p>
      </section>
    </>
  );

  const recentPosts = dynamicRecentPosts || [];

  return (
    <BlogLayout
      category="CUSTOMER CASE STUDY · PHARMACEUTICALS · SAP ECC · DATA INTEGRITY"
      title="Hardening Audit Trails for Pharma Data Integrity – MCA Rule 11(g) and 21 CFR Part 11"
      image={heroImage}
      content={content}
      recentPosts={recentPosts}
      date=""
      author=""
    />
  );
};

export default HardeningAuditTrailsPharma;
