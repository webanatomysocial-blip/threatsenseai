import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blogs from "./components/Blog";
import DynamicBlog from "./components/DynamicBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:blogId" element={<DynamicBlog />} />
      </Route>
    </Routes>
  );
}

export default App;
