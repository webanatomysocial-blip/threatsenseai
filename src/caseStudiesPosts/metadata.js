import one from './caseStudiesImages/1.avif';


export const caseStudyMetadata = [
  {
    id: "ClosingTheAuditTrail",
    title: "Closing the Audit Trail Assurance Gap on RISE with SAP",
    slug: "closing-the-audit-trail-assurance-gap-rise-sap",
    excerpt: "How a leading Indian retail-led mall developer extended MCA Rule 11(g) audit trail enforcement into a SAP S/4HANA Private Edition.",
    image: one,
    readTime: "8 Min Read",
    date: "May 19, 2026",
    author: "ThreatSense AI Team"
  }
];

// Preload images with error handling
if (typeof Image !== 'undefined') {
  caseStudyMetadata.forEach(cs => {
    const img = new Image();
    img.src = cs.image;
    img.onload = () => console.log(`Successfully preloaded case study image: ${cs.image}`);
    img.onerror = () => {
        console.error(`Failed to preload case study image: ${cs.image}`);
        cs.image = "/images/placeholder.jpg"; // Optional fallback
    };
  });
}
