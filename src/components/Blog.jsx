import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { blogMetadata } from "../blogs/metadata.js";
import "../css/Blog.css";
import { AiFillMessage } from "react-icons/ai";

const Blogs = ({ limit = "all" }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // For now, we take from metadata directly as requested
    // In a real app, we might still want the dynamic loading for the full post content
    const sorted = [...blogMetadata].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setBlogs(limit === "all" ? sorted : sorted.slice(0, limit));
  }, [limit]);

  if (blogs.length === 0) return null;

  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <div className="whole-blog-section">
      <div className="blogs-header">
        <div className="sub-para-text security-label">
          <AiFillMessage style={{ marginRight: "4px" }} />
          Blogs
        </div>
        <h1 className="head-text">
          Read our <br /> latest blogs
        </h1>
      </div>

      <div className="blogs-main-wrapper">
        {/* Featured Blog */}
        {featuredBlog && (
          <div className="featured-blog-row">
            <Link
              to={`/blogs/${featuredBlog.id}`}
              className="featured-image-container"
            >
              <img src={featuredBlog.image} alt={featuredBlog.title} />
              <div className="image-overlay-text">{featuredBlog.category}</div>
            </Link>
            <div className="featured-content">
              <div className="category-tag">{featuredBlog.category}</div>
              <Link
                to={`/blogs/${featuredBlog.id}`}
                style={{ textDecoration: "none" }}
              >
                <h2 className="sub-head-text">{featuredBlog.title}</h2>
              </Link>
              <p className="sub-para-text">{featuredBlog.excerpt}</p>

              <div className="featured-footer">
                <div className="author-info">
                  <div className="author-avatar"></div>
                  <span className="sub-para-text">
                    {featuredBlog.author || "Author Name"}
                  </span>
                </div>
                <span className="sub-para-text date-text">
                  {featuredBlog.date}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Blogs Grid */}
        <div className="blogs-grid-wrapper">
          {remainingBlogs.map((blog, index) => (
            <div key={index} className="grid-blog-item">
              <Link to={`/blogs/${blog.id}`} className="grid-image-container">
                <img src={blog.image} alt={blog.title} />
                <div className="image-overlay-text">{blog.category}</div>
              </Link>
              <div className="grid-content">
                <div className="category-tag">{blog.category}</div>
                <Link
                  to={`/blogs/${blog.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <p className="sub-head-text">{blog.title}</p>
                </Link>
                <div className="grid-footer">
                  <p className="sub-para-text date-text">{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Empty slot to match the grid if needed */}
          {remainingBlogs.length % 3 !== 0 && (
            <div className="grid-blog-item empty"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
