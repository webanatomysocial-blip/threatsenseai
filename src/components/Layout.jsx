import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop"; // Assuming this exists given the context
import ScrollToTopButton from "./ScrollToTopButton";
import Chatbot from "./Chatbot";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="app-layout">
      <Header />
      <main key={`page-${location.pathname}`}>
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Chatbot />
      <Footer key={`footer-${location.pathname}`} />
    </div>
  );
};

export default Layout;
