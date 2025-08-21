import Hero from "../Hero/Hero.jsx";
import About from "./About/About.jsx";
import Services from "./Services/services.jsx";
import Solutions from "./Solutions/solutions.jsx";
import Stats from "./Stats/stats.jsx";
import Clients from "./Clients/clients.jsx";
import Faq from "./FAQ/faq.jsx";
import Cta from "./cta/cta.jsx";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  const heroInfo = {
    page: "home-hero",
    pageHeading: "Empowering Africa with High Speed Connectivity",
    pageSubText:
      "We deliver reliable, high-capacity broadband infrastructure that makes high-speed internet accessible across Africa, partnering withleading ISPs and telecom operators.",
    buttonText: "Discover our Services",
  };
  return (
    <>
      <Hero
        page={heroInfo.page}
        pageHeading={heroInfo.pageHeading}
        pageSubText={heroInfo.pageSubText}
        buttonText={heroInfo.buttonText}
      />
      <About />
      <Services />
      <Solutions />
      <Stats />
      <Clients />
      <Faq />
      <Cta />
    </>
  );
}
