import "./About.css";
import Hero from "../Hero/Hero";
import { Link } from "react-router-dom";
export default function About() {
  const heroInfo = {
    page: "about-hero",
    pageHeading: "Deeper dive into CBNL",
    pageSubText:
      "Building the networks that bring people and possibilities together.",
  };
  const pageDirection = [
    {
      img: "Teams.webp",
      name: "Executives",
      heading: "Meet our Executive Team",
      link: "/Exec",
      alt: "Three executives sitting side by side with a table with their hands on it making a fist",
    },
    {
      img: "Policy.webp",
      name: "Policy",
      heading: "Values We Follow",
      link: "/Policy",
      alt: "Signing on a paper",
    },
  ];
  const managementInfo = [
    "Executive MANAGEMENT TEAM IS FULLY COMMITTED TO QUALITY, OCCUPATIONAL HEALTH, SAFETY AND THE ENVIRONMENT",
    "Iso Policy Statement IS WELL ARTICULATED AND COMMUNICATED TO EMPLOYEES AND Partners",
    "PROCESSES ARE DOCUMENTED AND REVIEWED PERIODICALLY IN LINE WITH BEST PRACTICE STANDARDS",
    "COMPLIANCE IS MANDATORY BY ALL IN THE OFFICE AND ON THE FIELD AND IS MONITORED BY THE QSHE TEAM",
  ];
  return (
    <>
      <Hero
        page={heroInfo.page}
        pageHeading={heroInfo.pageHeading}
        pageSubText={heroInfo.pageSubText}
      />
      <main className="page-main">
        <div className="intro-text about-intro">
          <h2>About Us</h2>
          <p>
            At CBNL, we engineer and deliver wireless connectivity solutions
            that meet the diverse needs of today's businesses, governments,
            ISPs, and urban developments. Our technology empowers organizations
            to deploy high-speed broadband quickly, affordably, and reliably —
            even in areas where traditional infrastructure struggles. Whether
            it's extending broadband into rural communities, linking buildings
            in urban estates, supporting smart city infrastructure, or enabling
            large-scale ISP rollouts, our solutions are designed for
            performance, flexibility, and scale.
          </p>
          <br />
          <p>
            In early 2020, driven by the need to meet the evolving challenges of
            the licensed point to multipoint, fixed wireless access market, CBNL
            was restructured into two new companies. As a result, Cambridge
            Broadband Networks Group (CBNG) Ltd and Cambridge Broadband Networks
            Limited Africa were formed. CBNG’s aim is to provide reliable,
            accessible and predictable high capacity mmWave technology, with no
            ‘hidden extras’, to telcos and WISPs working in the licensed
            enterprise access, backhaul and residential access spaces around the
            world. Additionally, CBNG is a provider of comprehensive turnkey
            services to support the lifecycle of the network including planning
            tools, design/implementation, 1/2/3 line support as well as managed
            services. Cambridge Broadband Networks Limited Africa, now a
            separate company, works in direct partnership with CBNG to provide
            VectaStar products and services directly to customers in the African
            region from its offices in Kenya, Nigeria, Ghana and South Africa.
          </p>
        </div>
        <div className="vision-container">
          <h2>Our Vision</h2>
          <div className="vision">
            <img
              src="Visions.png"
              alt="Animation of a man looking up with a small handheld telescope to a mountain that has a bullseye"
              loading="lazy"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              doloremque, quasi natus, temporibus repudiandae quae odit fugit
              eius tempore sit voluptate perferendis repellat praesentium
              numquam. Nostrum natus soluta rerum odit perspiciatis incidunt
              porro, voluptate molestias commodi quis facere quo fugiat
              inventore, et repellat corporis mollitia minima expedita! Cum,
              consectetur quae!
            </p>
          </div>
        </div>
        <div className="mission-container">
          <h2>Our mission</h2>
          <div className="mission">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              doloremque, quasi natus, temporibus repudiandae quae odit fugit
              eius tempore sit voluptate perferendis repellat praesentium
              numquam. Nostrum natus soluta rerum odit perspiciatis incidunt
              porro, voluptate molestias commodi quis facere quo fugiat
              inventore, et repellat corporis mollitia minima expedita! Cum,
              consectetur quae!
            </p>
            <img
              src="Mission.jpg"
              alt="Round globe with blue and red dots on them"
              loading="lazy"
            />
          </div>
        </div>
        <CerfitiedContainer managementInfo={managementInfo} />
        <h2>You might also like</h2>
        <div className="other-pages grid-two-cols">
          {pageDirection.map((direction) => (
            <div className="each-page">
              <img src={direction.img} alt={direction.alt} loading="lazy" />
              <div className="each-page-info">
                <p className="heading">{direction.heading}</p>
                <Link className="link-button" to={direction.link}>
                  {direction.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

function CerfitiedContainer({ managementInfo }) {
  return (
    <div className="certified-container">
      <h2>Our Commitment to Quality, Safety & Standards</h2>
      <p>
        CBNL Africa operates under a comprehensive QSHE Management System
        designed to guarantee quality delivery, protect health and safety, and
        safeguard the environment. Our approach ensures risk management and
        continuous improvement across all projects.
      </p>
      <ul>
        {managementInfo.map((info) => (
          <li className="flex-center">
            <span className="checkmark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
              </svg>
            </span>
            <p>{info}</p>
          </li>
        ))}
      </ul>
      <h3>We Are ISO Certified</h3>
      <div className="Iso flex-center">
        <img src="ISO-1.jpg" alt="" />
        <img src="ISO-2.png" alt="" />
      </div>
    </div>
  );
}
