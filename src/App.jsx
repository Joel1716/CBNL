import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home Page/Home.jsx";
import About from "./About Page/About.jsx";
import Solution from "./Solution Page/Solution";
import Service from "./Service Page/Service.jsx";
import StickyHeader from "./Header.jsx";
import Exec from "./Executives/Exec.jsx";
import Policy from "./Policy/Policy.jsx";
import Tech from "./Tech Page/Tech.jsx";
import Isp from "./Contact/ISP/Isp.jsx";
import Oem from "./Contact/OEM/oem.jsx";
import Footer from "./Footer/Footer.jsx";
import "./App.css";
import "./queries.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top (0,0 coordinates)
  }, [pathname]); // Rerun the effect whenever the pathname changes

  return null; // This component doesn't render any UI
};
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <StickyHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/services" element={<Service />} />
        <Route path="/Tech" element={<Tech />} />
        <Route path="/Exec" element={<Exec />} />
        <Route path="/Isp" element={<Isp />} />
        <Route path="/Oem" element={<Oem />} />
        <Route path="/Policy" element={<Policy />} />
      </Routes>
      <Footer />
    </Router>
  );
}
