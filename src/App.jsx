import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Home from "./Home Page/Home.jsx";
import About from "./About Page/About.jsx";
import Solution from "./Solution Page/Solution";
import Service from "./Service Page/Service.jsx";
// Extra Pages
import Exec from "./Executives/Exec.jsx";
import Policy from "./Policy/Policy.jsx";
import Tech from "./Tech Page/Tech.jsx";
import Isp from "./Contact/ISP/Isp.jsx";
import Oem from "./Contact/OEM/oem.jsx";
import ReachUs from "./Contact/ReachUs/ReachUs.jsx";
import Training from "./Training/Training.jsx";
import Support from "./Support/Support.jsx";
import LocationPage from "./Location Page/LocationPage.jsx";
// Solution Pages
import MobileBackhaul from "./Solution Page/Mobile/mobile.jsx";
import EnterpriseAccess from "./Solution Page/Enterprise/EnterpriceAccess.jsx";
import IspNetwork from "./Solution Page/IspNetwork/IspNetwork.jsx";
import LeadingEdge from "./Solution Page/LeadingEdge/LeadingEdge.jsx";
import NetworkBand from "./Solution Page/NetworkBand/NetworkBand.jsx";
import FifthGeneration from "./Solution Page/5G-Solution/5G-Solution.jsx";
import SpaceOptics from "./Solution Page/Space-Optics/SpaceOptics.jsx";
import FibreSolution from "./Solution Page/Fibre-Solution/FibreSolution.jsx";
// Reusables
import StickyHeader from "./Header/Header.jsx";
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
  const [navClick, setNavClick] = useState(null);
  return (
    <div onClick={() => navClick && setNavClick(null)}>
      <Router>
        <ScrollToTop />
        <StickyHeader navClick={navClick} onNavClick={setNavClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/services" element={<Service />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Exec" element={<Exec />} />
          <Route path="/Training" element={<Training />} />
          <Route path="/Location" element={<LocationPage />} />
          <Route path="/Policy" element={<Policy />} />
          {/*  */}
          <Route path="/Mobile-Backhaul" element={<MobileBackhaul />} />
          <Route path="/Enterprise-Access" element={<EnterpriseAccess />} />
          <Route path="/Isp-Network" element={<IspNetwork />} />
          <Route path="/Leading-Edge" element={<LeadingEdge />} />
          <Route path="/Network-Band" element={<NetworkBand />} />
          <Route path="/5G_Solution" element={<FifthGeneration />} />
          <Route path="/Space-Optics" element={<SpaceOptics />} />
          <Route path="/Fibre-Solution" element={<FibreSolution />} />
          {/*  */}
          <Route path="/Isp" element={<Isp />} />
          <Route path="/Oem" element={<Oem />} />
          <Route path="/Reach-Us" element={<ReachUs />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
