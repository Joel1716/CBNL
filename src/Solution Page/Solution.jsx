import "./Solution.css";
import Hero from "../Hero/Hero";
export default function Solution() {
  const heroInfo = {
    page: "solution-hero",
    pageHeading: "Tailored Solutions for Seamless Connectivity",
    pageSubText:
      "At CBNL, we provide cutting-edge technologies that redefine how networks operate, scale, and deliver performance across the continent",
  };
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
          <div className="all-solutions grid-two-cols">
            <div className="solution-info">
              <h3>Building-to-Building Connectivity</h3>
              <h4>
                Seamless wireless links across estates, campuses, and facilities
              </h4>
              <p>
                Enable communication across multiple buildings without the
                hassle of fiber trenching. Our point-to-point and
                point-to-multipoint wireless links connect schools, hospitals,
                corporate buildings, and residential blocks, allowing them to
                share internet access, central systems, and security
                infrastructure. It's a scalable, cost-efficient solution that
                supports rapid urban growth and unified network management.
              </p>
            </div>
            <div className="image-box">
              <img src="building.webp" alt="" />
            </div>
            {/*  */}
            <div className="image-box">
              <img src="Rural.webp" alt="" />
            </div>
            <div className="solution-info">
              <h3>Rural Connectivity</h3>
              <h4>Affordable broadband for remote and underserved regions</h4>
              <p>
                We deliver cost-effective, high-capacity wireless broadband to
                rural areas lacking traditional infrastructure. Our solutions
                enable local communities, schools, and small businesses to
                access essential internet services promoting digital inclusion,
                education, and economic growth. Designed for fast deployment and
                rugged environments, our networks ensure strong coverage,
                reliability, and scalability in even the most challenging
                terrains.
              </p>
            </div>
            {/*  */}
            <div className="solution-info">
              <h3>Smart City Connectivity</h3>
              <h4>
                Powering intelligent urban infrastructure with wireless
                broadband
              </h4>
              <p>
                As cities adopt smarter technologies, we support their backbone:
                connectivity. From traffic lights and environmental sensors to
                CCTV and public Wi-Fi, our wireless systems connect critical
                infrastructure in real-time. High throughput and low latency
                allow cities to operate more efficiently, keep residents safe,
                and gather valuable data for planning and management.
              </p>
            </div>
            <div className="image-box">
              <img src="Smart-City.webp" alt="" />
            </div>
            {/*  */}
            <div className="image-box">
              <img src="Enterprise.webp" alt="" />
            </div>
            <div className="solution-info">
              <h3>Enterprise Access</h3>
              <h4>Dedicated high-speed internet for business operations</h4>
              <p>
                Enterprises depend on secure, uninterrupted connectivity. Our
                solutions offer private, high-speed wireless access tailored for
                businesses that need real-time data flow, cloud services, and
                remote collaboration. Whether you're in finance, logistics,
                education, or healthcare, our enterprise-grade networks ensure
                superior uptime, data security, and scalability — all without
                relying on fiber or digging.
              </p>
            </div>
            {/*  */}
            <div className="solution-info">
              <h3>Hybrid Fiber & Wireless Infrastructure</h3>
              <h4>Combining fiber's speed with wireless flexibility</h4>
              <p>
                Our hybrid approach allows operators to extend service into
                areas where fiber alone is too expensive or slow to deploy.
                Fiber delivers core connectivity, while wireless fills the gaps
                — maintaining quality and coverage. This model is especially
                effective for semi-urban expansion, backup connectivity, or
                dense areas requiring fast, reliable delivery.
              </p>
            </div>
            <div className="image-box">
              <img src="fibre.webp" alt="" />
            </div>
            {/*  */}
            <div className="image-box">
              <img src="mobile.webp" alt="" />
            </div>
            <div className="solution-info">
              <h3>Mobile Backhaul</h3>
              <h4>
                Robust wireless infrastructure to support mobile network
                expansion
              </h4>
              <p>
                CBNL's wireless backhaul solutions connect mobile base stations
                to the core network, enabling operators to extend coverage and
                boost network capacity in urban and rural areas. Designed to
                handle high traffic loads and future growth, our solutions
                ensure mobile users enjoy seamless voice, data, and video
                services,even during peak usage periods. They are ideal for 4G
                LTE and 5G deployments, supporting rapid rollout and reduced
                infrastructure costs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function ImgText() {
  const datas = [
    {
      img: <img src="Rural.webp" alt="" />,
      heading: "Rural Connectivity",
      subheading: "Affordable broadband for remote and underserved regions",
      info: "We deliver cost-effective, high-capacity wireless broadband to rural areas lacking traditional infrastructure. Our solutions enable local communities, schools, and small businesses to access essential internet services promoting digital inclusion, education, and economic growth. Designed for fast deployment and rugged environments, our networks ensure strong coverage, reliability, and scalability in even the most challenging terrains.",
    },
    {
      img: <img src="Enterprise.png" alt="" />,
      heading: "Enterprise Access",
      subheading: "Dedicated high-speed internet for business operations",
      info: "Enterprises depend on secure, uninterrupted connectivity. Our solutions offer private, high-speed wireless access tailored for businesses that need real-time data flow, cloud services, and remote collaboration. Whether you're in finance, logistics, education, or healthcare, our enterprise-grade networks ensure superior uptime, data security, and scalability — all without relying on fiber or digging.",
    },
    {
      img: <img src="mobile.webp" alt="" />,
      heading: "Mobile Backhaul",
      subheading:
        "   Robust wireless infrastructure to support mobile network expansion",
      info: "     CBNL's wireless backhaul solutions connect mobile base stations to the core network, enabling operators to extend coverage and boost network capacity in urban and rural areas. Designed to handle high traffic loads and future growth, our solutions ensure mobile users enjoy seamless voice, data, and video services,even during peak usage periods. They are ideal for 4G LTE and 5G deployments, supporting rapid rollout and reduced infrastructure costs.",
    },
  ];
  return datas.map((data) => (
    <>
      <div className="image-box">{data.img}</div>
      <div className="solution-info">
        <h3>{data.heading}</h3>
        <h4>{data.subheading}</h4>
        <p>{data.info}</p>
      </div>
    </>
  ));
}
console.log(TextImg);
function TextImg() {
  const datas = [
    {
      img: <img src="building.jpg" alt="" />,
      heading: "Building-to-Building Connectivity",
      subheading:
        "Seamless wireless links across estates, campuses, and facilities",
      info: "Enable communication across multiple buildings without the hassle of fiber trenching. Our point-to-point and point-to-multipoint wireless links connect schools, hospitals, corporate buildings, and residential blocks, allowing them to share internet access, central systems, and security infrastructure. It's a scalable, cost-efficient solution that supports rapid urban growth and unified network management.",
    },
    {
      img: <img src="Smart-City.jpg" alt="" />,
      heading: "Smart City Connectivity",
      subheading:
        "Powering intelligent urban infrastructure with wireless broadband",
      info: "As cities adopt smarter technologies, we support their backbone: connectivity. From traffic lights and environmental sensors to CCTV and public Wi-Fi, our wireless systems connect critical infrastructure in real-time. High throughput and low latency allow cities to operate more efficiently, keep residents safe, and gather valuable data for planning and management.",
    },
    {
      img: <img src="fibre.jpg" alt="" />,
      heading: "Hybrid Fiber & Wireless Infrastructure",
      subheading: "Combining fiber's speed with wireless flexibility",
      info: "Our hybrid approach allows operators to extend service intoareas where fiber alone is too expensive or slow to deploy. Fiber delivers core connectivity, while wireless fills the gaps, maintaining quality and coverage. This model is especially effective for semi-urban expansion, backup connectivity, or dense areas requiring fast, reliable delivery.",
    },
  ];
  return datas.map((data) => (
    <>
      <div className="solution-info">
        <h3>{data.heading}</h3>
        <h4>{data.subheading}</h4>
        <p>{data.info}</p>
      </div>
      <div className="image-box">{data.img}</div>
    </>
  ));
}
