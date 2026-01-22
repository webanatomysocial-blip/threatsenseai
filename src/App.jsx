import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DynamicBlog from "./components/DynamicBlog";
import BlogsPage from "./pages/Blogs";
import Contact from "./pages/Contact";
import AboutUs from "./pages/About-Us";
import Tads from "./solutions-pages/Tads";
import Mcaat from "./solutions-pages/Mcaat";
import SiemSoar from "./solutions-pages/siem-soar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="tads" element={<Tads />} />
        <Route path="mcaat" element={<Mcaat />} />
        <Route path="siem-soar" element={<SiemSoar />} />
        <Route path="blogs/:blogId" element={<DynamicBlog />} />
        {/* Redirect any other path to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
