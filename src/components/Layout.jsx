import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop"; // Assuming this exists given the context

const Layout = () => {
  const location = useLocation();

  return (
    <div className="app-layout">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer key={location.pathname} />
    </div>
  );
};

export default Layout;
