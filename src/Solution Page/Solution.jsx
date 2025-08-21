import "./Solution.css";
import Hero from "../Hero/Hero";
export default function Solution() {
  const heroInfo = {
    page: "solution-hero",
    pageHeading: "Tailored Solutions for Seamless Connectivity",
    pageSubText:
      "At CBNL, we provide cutting-edge technologies that redefine how networks operate, scale, and deliver performance across the continent",
  };
  const solutions = [
    {
      img: "building.webp",
      heading: "Building-to-Building Connectivity",
      subheading:
        "Seamless wireless links across estates, campuses, and facilities",
      info: "Enable communication across multiple buildings without the hassle of fiber trenching. Our point-to-point and point-to-multipoint wireless links connect schools, hospitals, corporate buildings, and residential blocks, allowing them to share internet access, central systems, and security infrastructure. It's a scalable, cost-efficient solution that supports rapid urban growth and unified network management.",
      alt: "Building",
    },
    {
      img: "Rural.webp",
      heading: "Rural Connectivity",
      subheading: "Affordable broadband for remote and underserved regions",
      info: "We deliver cost-effective, high-capacity wireless broadband to rural areas lacking traditional infrastructure. Our solutions enable local communities, schools, and small businesses to access essential internet services promoting digital inclusion, education, and economic growth. Designed for fast deployment and rugged environments, our networks ensure strong coverage, reliability, and scalability in even the most challenging terrains.",
      alt: "Rural Area",
    },
    {
      img: "Smart-City.webp",
      heading: "Smart City Connectivity",
      subheading:
        "Powering intelligent urban infrastructure with wireless broadband",
      info: "As cities adopt smarter technologies, we support their backbone: connectivity. From traffic lights and environmental sensors to CCTV and public Wi-Fi, our wireless systems connect critical infrastructure in real-time. High throughput and low latency allow cities to operate more efficiently, keep residents safe, and gather valuable data for planning and management.",
      alt: "Bunch of cars moving on the road connected with lines",
    },
    {
      img: "Enterprise.webp",
      heading: "Enterprise Access",
      subheading: "Dedicated high-speed internet for business operations",
      info: "Enterprises depend on secure, uninterrupted connectivity. Our solutions offer private, high-speed wireless access tailored for businesses that need real-time data flow, cloud services, and remote collaboration. Whether you're in finance, logistics, education, or healthcare, our enterprise-grade networks ensure superior uptime, data security, and scalability — all without relying on fiber or digging.",
      alt: "Top of a white Tower with rectangular antennas on them in an environment with lots of trees",
    },
    {
      img: "fibre.webp",
      heading: "Hybrid Fiber & Wireless Infrastructure",
      subheading: "Combining fiber's speed with wireless flexibility",
      info: "Our hybrid approach allows operators to extend service intoareas where fiber alone is too expensive or slow to deploy. Fiber delivers core connectivity, while wireless fills the gaps, maintaining quality and coverage. This model is especially effective for semi-urban expansion, backup connectivity, or dense areas requiring fast, reliable delivery.",
      alt: "Blue Fibre",
    },
    {
      img: "mobile.webp",
      heading: "Mobile Backhaul",
      subheading:
        "Robust wireless infrastructure to support mobile network expansion",
      info: "CBNL's wireless backhaul solutions connect mobile base stations to the core network, enabling operators to extend coverage and boost network capacity in urban and rural areas. Designed to handle high traffic loads and future growth, our solutions ensure mobile users enjoy seamless voice, data, and video services,even during peak usage periods. They are ideal for 4G LTE and 5G deployments, supporting rapid rollout and reduced infrastructure costs.",
      alt: "Tower with circular dishes and rectangular antennas on them",
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
        <div className="solutions-container">
          <h2>Our Solutions</h2>
          <div className="all-solutions">
            {solutions.map((solution) => {
              return (
                <div className="row grid-two-cols">
                  <div className="solution-info">
                    <h3>{solution.heading}</h3>
                    <h4>{solution.subheading}</h4>
                    <p>{solution.info}</p>
                  </div>
                  <div className="image-box">
                    <img src={solution.img} alt={solution.alt} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
