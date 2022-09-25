import { Route, BrowserRouter, Routes } from "react-router-dom";
import Blog from "../pages/blog";
import About from "../pages/about";
import Description from "../pages/description";
import Navbar from "../components/navbar";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </BrowserRouter>
  );
}
