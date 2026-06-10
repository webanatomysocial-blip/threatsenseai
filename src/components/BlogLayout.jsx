import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLocation } from "react-router-dom";
import "../css/blog-post.css";

// Import specific icons from react-icons
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import { RiLinkedinFill, RiInstagramFill } from "react-icons/ri"; // Filled versions (optional)
import { FaLinkedinIn, FaInstagram } from "react-icons/fa"; // Alternative popular ones

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// import sponsoredDefault from "../assets/Sponsored/sponsored-image.jpg";
import ShareButton from "./ShareButton";
// import LikeButton from "./LikeButton";
// import CommentSection from "./CommentSection";
import Footer from "./Footer";
// import "../css/interactive.css";

const BlogLayout = ({
  category,
  title,
  content,
  image,
  recentPosts,
  sponsoredImage,
  date,
  author,
}) => {
  const progressBarRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();
  const currentUrl = window.location.href;

  const isCaseStudy = location.pathname.includes('/case-studies');
  const parentText = isCaseStudy ? 'Case Studies' : 'Blogs';
  const parentLink = isCaseStudy ? '/case-studies' : '/blogs';

  useEffect(() => {
    // Animate Progress Bar width based on scroll
    gsap.to(progressBarRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <>
      <div className="pod-post-page">
        {/* Hero Section */}
        <div className="pod-hero-section">
          <div className="pod-split-header">
            <div className="pod-title-section">
              <h1 className="head-text">{title}</h1>
              
              <div className="blog-breadcrumbs">
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to={parentLink}>{parentText}</Link>
                <span>/</span>
                <span className="breadcrumb-current">{title}</span>
              </div>

              {(date || author) && (
                <div className="blog-hero-meta">
                  {author && <span className="blog-hero-author">{author}</span>}
                  {author && date && <span className="blog-hero-sep">·</span>}
                  {date && <span className="blog-hero-date">{date}</span>}
                </div>
              )}
            </div>
            <div className="pod-hero-img-container">
              <img src={image} alt={title} />
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div className="pod-sticky-header-container" ref={headerRef}>
          <div className="pod-sticky-header">
            <div className="pod-header-content">
              <div className="pod-header-title">{title}</div>
              <div className="pod-header-actions">
                <div className="social-icons-header">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      currentUrl,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="social-link-header"
                  >
                    <FiFacebook size={24} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      currentUrl,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="social-link-header"
                  >
                    <FiLinkedin size={24} />
                  </a>
                </div>
                {/* <LikeButton postId={title} /> */}
                <ShareButton url={currentUrl} title={title} />
              </div>
            </div>
            <div className="scroll-progress-bar" ref={progressBarRef}></div>
          </div>
        </div>

        {/* Layout */}
        <div className={`pod-container ${isCaseStudy ? 'case-study-layout' : 'three-column-layout'}`}>
          {!isCaseStudy && (
            <aside className="pod-sidebar-left">
              <div className="recent-posts">
                <h3>Recent posts</h3>
                {recentPosts &&
                  recentPosts.map((post, index) => (
                    <a key={index} href={post.link} className="recent-post-item">
                      {post.title}
                      <hr />
                    </a>

                  ))}
              </div>
            </aside>
          )}

          <div className="pod-main-content">
            <div className="pod-body">{content}</div>
          </div>
        </div>

        <div className="pod-container">
          {/* <CommentSection postId={title} /> */}
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
