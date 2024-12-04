import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Contact from "../page/contact";
import About from "../page/about";
import Project from "../page/projects";
import Service from "../page/services";
import Header from "../components/Header"; // Import Header component
const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
export default AppRouter;
