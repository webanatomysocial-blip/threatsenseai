import one from '../blogs/blogs-images/1.jpg';
import two from '../blogs/blogs-images/2.jpg';


export const blogMetadata = [
  {
    id: "UnmaskingCyberThreats",
    title: "Unmasking Cyber Threats in SAP: The Rising Need for Intelligent Security",
    category: "SAP Security",
    slug: "unmasking-cyber-threats-sap",
    excerpt: "SAP systems are the lifeblood of many enterprises, handling critical business operations, financial transactions, and sensitive data. However, they have increasingly become lucrative targets for cybercriminals.",
    image: one,
    date: "Jan 31, 2026",
    author: "ThreatSenseAI Team",
  },
  {
    id: "CybersecurityImperative",
    title: "The Cybersecurity Imperative: Safeguarding Enterprises in the Age of AI",
    category: "AI Security",
    slug: "cybersecurity-imperative-ai",
    excerpt: "In an era where digital transformation is redefining industries, cybersecurity has never been more critical. Enterprises are increasingly relying on AI and automation to streamline operations.",
    image: two,
    date: "Jan 30, 2026",
    author: "ThreatSenseAI Team",
  }
];

// Preload images with error handling
if (typeof Image !== 'undefined') {
  blogMetadata.forEach(blog => {
    const img = new Image();
    img.src = blog.image;
    img.onload = () => console.log(`Successfully preloaded image: ${blog.image}`);
    img.onerror = () => {
        console.error(`Failed to preload image: ${blog.image}`);
        blog.image = "/images/placeholder.jpg"; // Optional fallback
    };
  });
}