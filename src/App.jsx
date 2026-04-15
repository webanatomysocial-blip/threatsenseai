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
import PrivacyPolicy from "./Resources/Privacy-Policy";
import Cookies from "./Resources/Cookies";
import TermsAndConditions from "./Resources/Terms";
import AccessibilityStatement from "./Resources/Accessibility";
import TadsProtect from "./solutions-pages/TadsProtect";
import DotLayer from "./solutions-pages/DotLayer";
import Dmss from "./solutions-pages/Dmss";
import BecomeAPartner from "./solutions-pages/BecomeApartner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<BlogsPage />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="about" element={<AboutUs />} />
        <Route path="threatsenseai-ads" element={<Tads />} />
        <Route path="threatsenseai-ate" element={<Mcaat />} />
        <Route path="threatsense-itdar-for-sap" element={<SiemSoar />} />

        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="cookie-policy" element={<Cookies />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="accessibility-statement" element={<AccessibilityStatement />} />

        <Route path="tads-protect" element={<TadsProtect />} />
        <Route path="dot-layer" element={<DotLayer />} />
        <Route path="dmss" element={<Dmss />} />
        <Route path="blogs/:blogId" element={<DynamicBlog />} />
        <Route path="become-a-partner" element={<BecomeAPartner />} />
        {/* Redirect any other path to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
