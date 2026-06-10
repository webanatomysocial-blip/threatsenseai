import React, { Suspense, useMemo, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { caseStudyMetadata } from "../caseStudiesPosts/metadata.js";
import { Helmet } from "react-helmet-async";

// Import all case study modules from ../caseStudiesPosts/*.jsx
const caseStudyModules = import.meta.glob("../caseStudiesPosts/*.jsx");

export default function DynamicCaseStudy() {
  const { caseStudyId } = useParams(); // Expecting slug or id
  const navigate = useNavigate();

  // 1. Find metadata based on the URL param (slug or id)
  const metadata = useMemo(() => {
    if (!caseStudyId) return null;
    return (
      caseStudyMetadata.find((cs) => cs.slug === caseStudyId || cs.id === caseStudyId) || null
    );
  }, [caseStudyId]);

  // Redirect if visiting via ID instead of slug to maintain lowercase URLs
  useEffect(() => {
    if (metadata && caseStudyId === metadata.id) {
      navigate(`/case-studies/${metadata.slug}`, { replace: true });
    }
  }, [metadata, caseStudyId, navigate]);

  // 2. Determine the file path key for import.meta.glob
  const moduleKey = useMemo(() => {
    if (metadata) {
      const key = Object.keys(caseStudyModules).find((k) =>
        k.includes(`/${metadata.id}.jsx`)
      );
      return key;
    }
    const directKey = Object.keys(caseStudyModules).find((k) => {
      const fname = k.split("/").pop().replace(".jsx", "");
      return fname === caseStudyId;
    });
    return directKey;
  }, [metadata, caseStudyId]);

  // 3. Lazy Load the component
  const CaseStudyComponent = useMemo(() => {
    if (!moduleKey) return null;
    return React.lazy(caseStudyModules[moduleKey]);
  }, [moduleKey]);

  if (!CaseStudyComponent) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h1>Case Study Not Found</h1>
        <p>We couldn't find the case study you're looking for.</p>
        <Link
          to="/case-studies"
          style={{ textDecoration: "underline", color: "blue" }}
        >
          Back to Case Studies
        </Link>
      </div>
    );
  }

  // 4. Compute 4 recent case studies for sidebar
  const recentPosts = useMemo(() => {
    return caseStudyMetadata
      .filter((cs) => cs.slug !== caseStudyId && cs.id !== caseStudyId) // Exclude current
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
      .slice(0, 4) // Take top 4
      .map((cs) => ({
        title: cs.title,
        link: `/case-studies/${cs.slug}`,
      }));
  }, [caseStudyId]);

  return (
    <>
      <Helmet>
        <title>
          {metadata
            ? `${metadata.title} | ThreatSenseAI`
            : "Case Study | ThreatSenseAI"}
        </title>
        <meta name="description" content={metadata?.excerpt || ""} />
      </Helmet>

      <Suspense
        fallback={
          <div style={{ padding: "100px", textAlign: "center" }}>
            Loading Case Study...
          </div>
        }
      >
        <CaseStudyComponent dynamicRecentPosts={recentPosts} />
      </Suspense>
    </>
  );
}
