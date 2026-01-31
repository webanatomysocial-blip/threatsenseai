import React from "react";
import "../css/blog-post.css";

const BlogLayout = ({ category, title, content, image, recentPosts }) => {
  return (
    <>
      <div className="pod-post-page">
        {/* Simple Centered Layout */}
        <div className="pod-simple-container">
          {/* Title */}
          <h1 className="pod-simple-title">{title}</h1>

          {/* Hero Image */}
          <div className="pod-simple-image-container">
            <img src={image} alt={title} />
          </div>

          {/* Content */}
          <div className="pod-simple-content">{content}</div>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
