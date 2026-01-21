import one from '../blogs/blogs-images/1.png';
import two from '../blogs/blogs-images/2.png';
import three from '../blogs/blogs-images/3.jpeg';
import four from '../blogs/blogs-images/4.jpeg';


export const blogMetadata = [
  {
    id: "FutureTrendsSaaS",
    title: "Future Trends in SaaS: What's Next?",
    category: "Trends",
    slug: "future-trends-saas",
    excerpt: "Explore tomorrow's innovations, today.",
    image: one, // User requested 1.png for all for now
    date: "Jan 19, 2026",
    author: "Author Name",
  },
  {
    id: "SecurityEssentialsSaaS",
    title: "Security Essentials for Modern SaaS Products",
    category: "Security",
    slug: "security-essentials-saas",
    excerpt: "Essential security practices for modern cloud products.",
    image: one,
    date: "Jan 12, 2026",
  },
  {
    id: "SaaSOnboarding",
    title: "SaaS Onboarding That Delights Users",
    category: "Onboarding",
    slug: "saas-onboarding-delights",
    excerpt: "Creating a seamless first experience for your customers.",
    image: one,
    date: "Jan 13, 2026",
  },
  {
    id: "MustHaveIntegrations",
    title: "Must-Have Integrations for Your SaaS stack",
    category: "Integrations",
    slug: "must-have-integrations",
    excerpt: "The tools you need to connect for maximum efficiency.",
    image: one,
    date: "Jan 14, 2026",
  },
  {
    id: "ComparingPricingModels",
    title: "Comparing SaaS Pricing Models: What Fits You?",
    category: "Pricing",
    slug: "comparing-pricing-models",
    excerpt: "Finding the right value proposition for your product.",
    image: one,
    date: "Jan 15, 2026",
  },
  {
    id: "FiveReasonsProductivity",
    title: "5 Reasons SaaS Improves Productivity",
    category: "Productivity",
    slug: "five-reasons-productivity",
    excerpt: "How cloud tools are changing the way we work.",
    image: one,
    date: "Jan 16, 2026",
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