import "./Solution.css";
import Hero from "../Hero/Hero";
import { Link } from "react-router-dom";
export default function Solution() {
  const heroInfo = {
    page: "solution-hero",
    pageHeading: "Tailored Solutions for Seamless Connectivity",
    pageSubText:
      "At CBNL, we provide cutting-edge technologies that redefine how networks operate, scale, and deliver performance across the continent",
  };
  const solutions = [
    {
      title: "Mobile Backhaul",
      summary:
        "High-capacity microwave and fibre solutions enabling reliable backhaul for ISPs, MNOs, and enterprises.",
      link: "/Mobile-Backhaul",
    },
    {
      title: "Enterprise Access",
      summary:
        "Secure, scalable connectivity for businesses, campuses, and enterprises requiring dedicated high-speed links.",
      link: "/Enterprise-Access",
    },
    {
      title: "ISP Network",
      summary:
        "High-capacity microwave and fibre solutions enabling reliable backhaul for ISPs, MNOs, and enterprises.",
      link: "/Isp-Network",
    },
    {
      title: "Leading-Edge Solutions",
      summary:
        "Flexible Sub-6GHz radios supporting PTP & PMP for enterprise and operator networks.",
      link: "/Leading-Edge",
    },
    {
      title: "E-Band and V-Band",
      summary: "Multi-gigabit wireless backhaul for 5G and urban networks.",
      link: "/Network-Band",
    },
    {
      title: "5G Solution",
      summary:
        "5G FWA delivering high-throughput, low-latency connectivity at scale.",
      link: "/5G_Solution",
    },
    {
      title: "Free Space Optics",
      summary:
        "License-free gigabit wireless links with fiber-like performance.",
      link: "/Space-Optics",
    },
    {
      title: "Fiber Monitoring Solution",
      summary:
        "In-service fiber monitoring for higher SLA and reduced downtime.",
      link: "/Fibre-Solution",
    },
    {
      title: "GPON Solutions",
      summary: "Complete GPON/XGS-PON solutions for FTTx networks.",
      download: "true",
    },
  ];
  return (
    <>
      <Hero
        page={heroInfo.page}
        pageHeading={heroInfo.pageHeading}
        pageSubText={heroInfo.pageSubText}
      />
      <main className="page-main">
        <div className="intro-text">
          <h2>Our Procedure</h2>
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
          <p>
            Below are the solutions we provide to help drive connectivity
            forward.
          </p>
        </div>
        <div className="all-solutions">
          {solutions.map((solution, value) => {
            return (
              <div key={value}>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-summary">{solution.summary}</p>
                <button>
                  {solution.download === "true" ? (
                    <a href="/GPON-Info.pdf" target="_blank">
                      Learn More
                    </a>
                  ) : (
                    <Link to={solution.link}>Learn More</Link>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
