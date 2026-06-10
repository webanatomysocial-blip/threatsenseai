import React from "react";
import BlogLayout from "../components/BlogLayout";
import FAQ from "../components/FAQ";
import heroImage from "./caseStudiesImages/1.avif";

const faqItems = [
  {
    question: "Does MCA Rule 11(g) still apply to a company on RISE with SAP?",
    answer: "Yes – fully. Rule 11(g) is an obligation of the listed company under the Companies (Audit and Auditors) Rules, 2014. Moving books of account onto a SAP-managed infrastructure does not transfer the Rule 11(g) responsibility to SAP. The statutory auditor’s questions – was the audit trail operational throughout the year, was it tampered with, has it been preserved – must still be answered by the company."
  },
  {
    question: "Can a database-layer audit trail tool be deployed on RISE with SAP?",
    answer: "Generally no – not without compromising the RISE support model. Under RISE’s shared-responsibility model, SAP owns the operating system, the HANA host, and the HANA database engine. Customers do not have OS-level access and cannot install third-party agents on SAP-managed infrastructure. Audit-trail enforcement on RISE must work from the SAP Application layer."
  },
  {
    question: "Will the Audit Trail Enforcer break our RISE support entitlements?",
    answer: "No. The Audit Trail Enforcer is deployed entirely within the customer’s responsibility boundary at the SAP Application layer. It does not request privileged access to SAP-managed infrastructure, does not modify standard SAP components, and does not require changes from SAP’s ECS team. RISE support entitlements and SLAs are not affected."
  },
  {
    question: "How does the Audit Trail Enforcer relate to SAP’s own observability services on RISE?",
    answer: "Complementarily. SAP LogServ centralizes logs from across the application, database and OS layers of the RISE environment into the customer’s SIEM – strong for security operations, threat hunting, and forensic depth. The Audit Trail Enforcer addresses what sits beyond LogServ’s scope: real-time enforcement of the audit trail at the point of capture, tamper-evidence with chain-of-custody integrity, automated remediation when audit policies are disabled, and the specific Rule 11(g) evidence pack a statutory auditor expects under the ICAI Implementation Guide. The two run in parallel – different layers, different audiences – with no overlap or conflict."
  }
];

const ClosingTheAuditTrail = ({ dynamicRecentPosts }) => {
  const content = (
    <>
    <section>
      <p>How a leading Indian retail-led mall developer extended MCA Rule 11(g) audit trail enforcement into a SAP S/4HANA Private Edition (RISE with SAP) landscape – where the customer no longer owns the database – using ThreatSense AI's Audit Trail Enforcer.</p>
    </section>
      <section>
        <h2>AT A GLANCE</h2>
        <ul>
          <li><strong>Customer:</strong> A listed Indian retail-led mall developer – a leading owner, developer, and operator of premium retail destinations across multiple Indian metros</li>
          <li><strong>Scale (FY26):</strong> Quarterly revenue above ₹1,200 crore with strong year-on-year growth; record retail consumption in the high ₹15,000 crore range; portfolio rental income in the ₹2,000 crore range; Q4 EBITDA margins above 60%</li>
          <li><strong>Landscape:</strong> RISE with SAP (S/4HANA Cloud, Private Edition) – SAP-managed HANA on hyperscaler infrastructure; customer owns the Application and data layer; SAP owns the OS, database engine, and infrastructure</li>
          <li><strong>Compliance Mandate:</strong> MCA Rule 11(g), Companies (Audit and Auditors) Rules 2014; Proviso to Rule 3(1) of Companies (Accounts) Rules; Section 128(5) retention. Rule 11(g) does not transfer to SAP when the customer moves to RISE – it remains the customer's obligation.</li>
          <li><strong>Solution:</strong> ThreatSense AI Audit Trail Enforcer (MCAAT) – deployed at the SAP Application layer within the customer's responsibility boundary, without crossing into SAP-managed infrastructure or breaking the RISE support model</li>
          <li><strong>Outcome:</strong> Six previously-uncontrolled audit trail risks now have automated, real-time controls on RISE; eleven audit-grade capabilities the standard SAP method does not provide – a Rule 11(g) evidence pack auditors can read directly, complementing the customer’s broader RISE observability stack</li>
        </ul>
      </section>

      <section>
        <h2>Executive Summary</h2>
        <p>
          The Customer is a listed Indian retail-led mall developer – a leading owner, developer, and operator of premium retail destinations across multiple Indian metros, with one of the country’s largest portfolios by leasable area, retail consumption, and rental income. In FY26, the Customer ran its books of account on SAP S/4HANA Cloud, Private Edition under RISE with SAP – a deployment in which SAP itself manages the underlying hyperscaler infrastructure, the operating system, and the HANA database, and the customer retains responsibility for everything from the SAP Application layer upward.
        </p>
        <p>
          That distinction is not a footnote. It is the heart of this case study. MCA Rule 11(g) of the Companies (Audit and Auditors) Rules, 2014 places the audit-trail obligation squarely on the company – not on its cloud service provider. When a listed company moves to RISE with SAP, it does not transfer Rule 11(g) responsibility to SAP. It still has to demonstrate to the statutory auditor that the audit trail was operational throughout the year, that it was not tampered with, and that it has been preserved per Section 128(5). What changes is the technical surface available to demonstrate it. The DB-layer agents and OS-level controls that work on on-premise SAP are no longer available to the customer on RISE.
        </p>
        <p>
          The Customer engaged ThreatSense AI to close this assurance gap. Within the customer’s responsibility boundary on RISE – and without crossing into SAP-managed infrastructure or breaking the RISE support model – ThreatSense AI deployed the Audit Trail Enforcer at the SAP Application layer. The result: every one of the six structural audit-trail risks identified during the Rule 11(g) review now has an automated, real-time control; every one of the eleven audit-grade capabilities absent from the standard SAP method is now in place; and the audit trail is now demonstrably continuous, tamper-proof, and auditor-ready – on RISE.
        </p>
      </section>

      <section>
        <h2>Customer Profile</h2>
        <p>
          The Customer is a publicly listed Indian retail-led mixed-use developer with a portfolio spanning premium retail malls, Grade-A offices, hospitality, and residential. Selected operating context for the engagement:
        </p>
        <ul>
          <li>Quarterly revenue above ₹1,200 crore with strong year-on-year growth in FY26.</li>
          <li>Record retail consumption across the portfolio in the high ₹15,000 crore range, growing in the low-twenties percent year-on-year.</li>
          <li>Portfolio rental income in the ₹2,000 crore range, with the flagship retail asset a meaningful contributor.</li>
          <li>Q4 FY26 EBITDA margins above 60%, reflecting the high-quality, lease-driven nature of the retail real-estate business model.</li>
        </ul>
        <p>
          This profile is unusual in two respects relevant to audit trail compliance. First, the company’s books of account include unusually high-value, low-volume transactions – long-term lease modifications, common-area maintenance billing across hundreds of tenants, retail consumption reporting from third-party POS feeds, and percentage-rent reconciliations – each of which carries material audit risk. Second, the company runs on RISE with SAP, which means the customer owns the application-layer audit trail responsibility under Rule 11(g) but does not own the database it sits on top of.
        </p>
      </section>

      <section>
        <h2>The Compliance Challenge: Rule 11(g) Without DB Access</h2>
        <p>
          MCA Rule 11(g) is unforgiving in its specificity. The statutory auditor must comment on whether the audit trail (edit log) feature was operational throughout the year, whether it was tampered with, and whether it has been preserved per Section 128(5) of the Companies Act, 2013. The auditor does not give credit for “it’s SAP’s problem now” – the responsibility remains with the listed company.
        </p>
        <p>
          On RISE with SAP, the technical reality of demonstrating Rule 11(g) compliance is materially harder than it is on-premise. Under the RISE shared-responsibility model:
        </p>
        
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Layer</th>
                <th style={{ width: "15%" }}>Owned By</th>
                <th style={{ width: "65%" }}>Implication for MCA Rule 11(g)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hyperscaler (AWS / Azure / GCP)</td>
                <td>SAP</td>
                <td>Out of scope for the customer; not directly auditable for Rule 11(g) evidence.</td>
              </tr>
              <tr>
                <td>Operating system (HANA host)</td>
                <td>SAP</td>
                <td>Customer cannot install third-party agents at the OS level. SAP’s LogServ add-on can stream OS, DB, and Application layer logs to the customer’s SIEM for observability – a different need from real-time Rule 11(g) audit-trail enforcement.</td>
              </tr>
              <tr>
                <td>HANA database engine</td>
                <td>SAP</td>
                <td>Customer cannot deploy a DB-layer enforcement agent next to HANA; standard DB-side audit-trail tooling does not work on RISE.</td>
              </tr>
              <tr>
                <td>SAP Application & ABAP layer</td>
                <td>Customer</td>
                <td>Application-layer audit trail (SM19 / SM20, CDHDR / CDPOS, change documents) is the customer's responsibility – and where Rule 11(g) evidence must come from.</td>
              </tr>
              <tr>
                <td>Identity, roles, custom code</td>
                <td>Customer</td>
                <td>Privileged users, DEBUG-mode access, and custom Z-tables remain within the customer's audit-trail obligation.</td>
              </tr>
              <tr>
                <td>Business data</td>
                <td>Customer</td>
                <td>All retail-consumption, rental-income, and lease-master data – the books of account – remain the customer’s data and Rule 11(g) responsibility.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The implications for Rule 11(g) are immediate. Most Indian SAP audit trail vendors deploy a database-layer enforcement agent next to HANA – an approach that depends on customer ownership of the OS and DB layer. On RISE, that approach is structurally unavailable. The customer cannot install third-party software on the SAP-managed HANA host. Worse, native database audit policies on HANA – the very mechanism Rule 11(g) reviewers expect to see hardened – are administered by SAP, not by the customer, and are accessible to the customer only through limited application-layer windows.
        </p>
        <p>
          This creates what the SAP security community calls the “assurance gap”: the customer’s Rule 11(g) obligation has not changed, but the technical surface available to demonstrate it has. SAP offers strong answers for parts of this picture. LogServ centralizes logs from across the RISE environment – ABAP, HANA, OS, DB, Application, and more – and forwards them to the customer’s SIEM, restoring the visibility customers expect into the inner workings of their landscape. SAP Enterprise Threat Detection (cloud edition) layers threat-pattern monitoring on top of that telemetry. Both serve their security-operations purpose well. What they are not designed to do, by architecture, is answer the three specific questions a statutory auditor asks under Rule 11(g): was the audit trail operational throughout the year (continuous-operation enforcement, not log retrieval after the fact); was it tampered with (tamper-evident integrity at the point of capture, not downstream in a SIEM); and has it been preserved for the statutory 8 years per Section 128(5) (chain-of-custody retention, beyond LogServ’s default 365-day window). Those three asks live a layer above log forwarding, in the SAP Application layer where the customer holds full administrative reach.
        </p>
      </section>

      <section>
        <h2>Six Audit Trail Risks That Survive the Move to RISE</h2>
        <p>
          During the Rule 11(g) review of the Customer’s S/4HANA Private Edition landscape, six specific audit-trail risks were identified. Each is well-known on on-premise SAP, and each persists – in some cases worsens – on RISE:
        </p>
        
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: "35%" }}>Audit Trail Risk</th>
                <th style={{ width: "25%" }}>Manual / Standard SAP</th>
                <th style={{ width: "40%" }}>ThreatSense AI Control</th>
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
          On RISE, the privilege paradox has a new twist: the privileged user population is not just the customer’s own SAP Basis administrators. SAP’s shared-administration model means SAP personnel also have privileged access for support purposes. The Rule 11(g) auditor’s question – “how do you know the audit trail was not silently disabled?” – cannot be answered with “we trust SAP.” It has to be answered with a control.
        </p>
      </section>

      <section>
        <h2>The Solution: Audit Trail Enforcer on RISE with SAP</h2>
        <p>
          ThreatSense AI’s Audit Trail Enforcer is built specifically for MCA Rule 11(g) compliance on SAP. For this engagement, ThreatSense AI deployed the Audit Trail Enforcer entirely within the customer’s responsibility boundary on RISE – at the SAP Application layer, where the customer has full administrative reach. The deployment does not cross into SAP-managed infrastructure and does not affect RISE support entitlements. It is also designed to sit alongside, not duplicate, SAP-native observability services. 
        </p>
        <p>
          LogServ remains in place and continues its job: centralizing logs from the application, database, OS, and SAP Application layers into the customer's SIEM. The Audit Trail Enforcer covers a different need – enforcing the audit trail in real time, securing it against tampering at the point of capture, and preserving it for the eight years required by Section 128(5). LogServ feeds the security operations team. The Audit Trail Enforcer feeds the statutory auditor.
        </p>
        <p>
          Three architectural convictions shaped the deployment, each adapted for RISE:
        </p>
        <ul>
          <li><strong>Audit trails must enforce themselves – even on infrastructure the customer doesn’t own.</strong> The Audit Trail Enforcer re-enables audit policies and recreates change-document protections automatically, operating entirely from the SAP Application layer where the customer has full administrative reach.</li>
          <li><strong>Tamper-proof must mean tamper-proof – including against privileged SAP personnel.</strong> Hash-chained audit records are streamed to a customer-controlled WORM store outside the RISE perimeter, so even SAP-side privileged access cannot quietly alter the customer’s Rule 11(g) evidence.</li>
          <li><strong>DEBUG-mode is the auditor’s blind spot, on every SAP deployment model.</strong> The Audit Trail Enforcer captures DEBUG-mode changes to CDHDR / CDPOS and blocks the user from the application in real time, with an automatic incident raised in the customer’s ITSM.</li>
        </ul>
      </section>

      <section>
        <h2>Why ThreatSense AI Over the Standard SAP Method on RISE</h2>
        <p>
          Before engaging ThreatSense AI, the Customer’s IT team had configured native SAP audit policies in line with SAP Note 3042258, hardened SAP authorizations around audit-relevant transaction codes, and reviewed the SAP-native security and observability stack on RISE – SAP Enterprise Threat Detection (cloud edition) for threat-pattern monitoring, and SAP LogServ for centralized log forwarding from across the application, database, OS, and Application layers. 
        </p>
        <p>
          These services do exactly what they are designed to do, and they remain valuable as the SIEM and observability spine of the customer’s RISE landscape. The Rule 11(g) review identified eleven capability gaps that sit beyond their architectural scope: real-time enforcement of audit-trail continuity, tamper-evidence at the point of capture, automated remediation of disabled audit policies, and the specific evidence pack a statutory auditor expects under the ICAI Implementation Guide.
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
              <tr>
                <td>Auditor-friendly dashboards</td>
                <td style={{ color: "red", textAlign: "center" }}>&#10008;</td>
                <td style={{ color: "green", textAlign: "center" }}>&#10004;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Eleven capabilities. Zero coverage from the standard SAP method on RISE. Full coverage from ThreatSense AI – deployed entirely within the customer’s responsibility boundary, with no compromise to the RISE support model.
        </p>
      </section>

      <section>
        <h2>Deployment on RISE with SAP – Within the Customer Boundary</h2>
        <p>
          ThreatSense AI delivered the engagement in four phases, co-led with the Customer’s SAP Basis (application-layer), Internal Audit, and Information Security teams. SAP’s ECS team was kept informed but the deployment did not require SAP-side changes – a key design constraint that protected the customer’s RISE SLAs and support entitlements.
        </p>
        <ul>
          <li><strong>Phase 1 – Discovery &amp; Boundary Mapping.</strong> Inventory of financially relevant SAP tables (BKPF / BSEG, CDHDR / CDPOS, contract and lease master data, MSEG for inventory across mall operations), the customer-side privileged user population, and a precise mapping of which audit-trail surfaces sit in the customer’s responsibility boundary versus SAP’s. Output: a Rule 11(g) gap register reviewed with the statutory auditor’s IT-audit lead and the customer’s SAP RISE program manager.</li>
          <li><strong>Phase 2 – Application-Layer Deployment.</strong> Audit Trail Enforcer components installed at the SAP Application layer – entirely within the customer’s administrative reach. Audit policies hardened, SM19 baseline locked in, change-document protection extended to CDHDR / CDPOS, and a tamper-proof audit ledger established outside the RISE perimeter. Zero changes required from SAP’s side.</li>
          <li><strong>Phase 3 – Policy Tuning.</strong> DDL / DML log growth tuned to keep volumes manageable while still capturing every transaction in scope of Rule 3(1). False-positive rate on tamper alerts driven below 1%. ITSM integration configured. Coordination protocol agreed with the customer’s SAP ECS contact for any future incidents that involve SAP-side privileged access.</li>
          <li><strong>Phase 4 – Audit Dress Rehearsal.</strong> Mock Rule 11(g) walkthrough with the statutory auditor’s team using the Audit Trail Enforcer’s auditor-friendly dashboards, aligned to the ICAI Implementation Guide for Rule 11(g). All six original audit-trail risks formally retired in writing.</li>
        </ul>
      </section>

      <section>
        <h2>Results: Rule 11(g) Compliance Inside the Customer’s RISE Boundary</h2>
        <p>
          The Customer closed its FY26 statutory audit with no Rule 11(g) qualifications. Three specific outcomes stand out and matter most to a CFO or CIO of any RISE-bound listed company:
        </p>

        <h3>1. The Rule 11(g) evidence pack is generated at the SAP Application layer</h3>
        <p>
          The Customer demonstrated to its statutory auditor that the audit-trail obligation was satisfied through application-layer enforcement – the layer the customer owns and can administer fully on RISE. The Audit Trail Enforcer provides the continuous-operation attestation, tamper-evidence report, and 8-year retention proof the auditor requires, mapped to the ICAI Implementation Guide for Rule 11(g). For customers who also subscribe to LogServ for centralized OS, DB, and Application layer logs visibility into the SIEM, the two services run in parallel without overlap: LogServ feeds the security operations team, the Audit Trail Enforcer feeds the statutory auditor.
        </p>

        <h3>2. The shared-responsibility model is honoured – not bypassed</h3>
        <p>
          The deployment did not request privileged access to SAP-managed infrastructure, did not attempt to install agents at the OS or HANA layer, and did not require modifications from SAP’s ECS team. The Customer’s RISE support entitlements, SLAs, and SAP support agreements are intact. This matters: every Indian SAP RISE customer asks the same question of every security vendor – “will this break our RISE support?” – and the answer here is no.
        </p>

        <h3>3. The DEBUG-mode blind spot is closed – even with shared SAP-side privileged access</h3>
        <p>
          Privileged users – whether on the customer side or the SAP-managed side – can no longer silently disable audit policies, delete logs, or modify CDHDR / CDPOS via DEBUG mode without being detected and reverted in real time, with an incident raised in the customer’s ITSM. For a listed company on RISE where the privileged user population is, by design, broader than just the customer’s own administrators, this is the single most consequential change.
        </p>

        <h3>Customer Voice</h3>
        <blockquote style={{ fontStyle: "italic", borderLeft: "4px solid #ccc", paddingLeft: "15px", margin: "20px 0" }}>
          “Moving to RISE was the right strategic decision – but it didn’t change our Rule 11(g) obligation, and it removed the technical surfaces our peers rely on to demonstrate audit-trail integrity. ThreatSense AI gave us an enforcement layer that works inside our responsibility boundary, doesn’t touch SAP-managed infrastructure, and gives our auditor exactly what Rule 11(g) asks for.”
          <br /><br />
          <strong>– Senior IT & Compliance Leader, The Customer</strong>
        </blockquote>
      </section>

      <section>
        <h2>If You’re on RISE with SAP, This Applies to You</h2>
        <p>
          Every listed Indian company on RISE with SAP faces the same Rule 11(g) obligation as every on-premise SAP customer. The technical surface available to demonstrate that obligation has shifted: under the RISE shared-responsibility model, the customer owns the SAP Application layer and the data, while SAP manages the infrastructure beneath. SAP’s own services do exactly what they are designed to do – LogServ centralizes logs from across the application, database, OS, and Application layers into the customer’s SIEM; SAP Enterprise Threat Detection (cloud edition) provides threat-pattern monitoring – and they remain valuable as the security-operations spine of the customer’s RISE landscape. What sits beyond their architectural scope, and squarely in the customer’s responsibility boundary, is real-time enforcement of the audit trail itself: keeping audit policies active, capturing changes that bypass standard mechanisms (such as DEBUG-mode CDHDR / CDPOS edits), preserving evidence with tamper-resistant integrity at the point of capture, and producing an evidence pack the statutory auditor can read directly under the ICAI Implementation Guide for Rule 11(g).
        </p>
        <p>
          ThreatSense AI’s Audit Trail Enforcer is built specifically for that scope. It has been deployed productively on RISE with SAP, end-to-end, against the actual Rule 11(g) bar set by an Indian statutory auditor. The deployment lives entirely inside the customer’s responsibility boundary at the SAP Application layer, does not affect RISE support entitlements, and runs alongside the customer’s SAP-native observability stack – LogServ, ETD, and others – without overlap or conflict. If you are evaluating Rule 11(g) compliance on a RISE landscape – or planning the migration and thinking carefully about what happens to your audit-trail posture afterwards – the path the Customer in this case study took is available to you.
        </p>
      </section>

      <section>
         <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <FAQ items={faqItems} isBlog={true} />
      </section>

      <section>
        <h2>About ThreatSense AI</h2>
        <p>
          ThreatSense AI builds AI-driven security and compliance products for regulated enterprises. The Audit Trail Enforcer is built specifically to deliver MCA Rule 11(g) audit-trail compliance for Indian listed companies and large private companies running SAP – on-premise, on RISE with SAP (S/4HANA Cloud, Private Edition), and on hybrid landscapes. It is deployed across retail real estate, petrochemicals, pharmaceuticals, banking, and infrastructure. To request a Rule 11(g) and RISE readiness assessment, a SAP audit-trail gap analysis, or a 30-minute walkthrough, visit threatsenseai.com or contact your account team.
        </p>
      </section>
    </>
  );

  const recentPosts = dynamicRecentPosts || [];

  return (
    <BlogLayout
      category="CUSTOMER CASE STUDY · RETAIL REAL ESTATE · RISE WITH SAP · MCA RULE 11(g)"
      title="Closing the Audit Trail Assurance Gap on RISE with SAP"
      image={heroImage}
      content={content}
      recentPosts={recentPosts}
      date=""
      author=""
    />
  );
};

export default ClosingTheAuditTrail;
