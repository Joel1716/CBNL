import { useState, useEffect, useRef } from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
export default function Service() {
  const [selected, setSelected] = useState(null);
  const gridRef = useRef(null);
  const [cols, setCols] = useState(2);
  const services = [
    {
      title: "Network planning & design",
      shortMessage:
        "Optimized network plans using advanced RF simulation tools.",
      info: "Our in-house design team provides customers with RF planning and network design using CBNL developed and commercial tools. Our RF planning service uses simulation-based software for dimensioning and planning VectaStar microwave using customer-provided site locations, along with capacity, availability and quality of service requirements. Using this data, plans are produced which identify hub locations (taking into account any preferred locations), connectivity to remote terminals, along with modulation attained for the required availability at each remote terminal. If spectrum has been assigned, the channels and polarisations to be used on each sector are identified; otherwise CBNL will advise on the total spectrum required. Designed to extract the peak performance from VectaStar, CBNL RF planning tools incorporate the latest ITU guidelines and specifications required for the design of VectaStar networks. The service can help transmission network planners design ‘green field’ multipoint networks, model business case scenarios, plan system expansions, re-engineer networks, or assist with network optimisation.",
    },
    {
      title: "Network Operation",
      shortMessage:
        "End-to-end network monitoring, spares, and repair services.",
      info: "We provide network operation support which ensures our customer networks run as efficiently as possible. CBNL is able to provide expertise to help operators integrate their Network Management Systems with CBNL’s VectaStar management platform to enable integrated end to end network operations. Equipment inventory and spares management is an area where we are able to reduce OPEX and CAPEX costs for our customers. Working with leading logistics and warehousing partners, CBNL can ensure equipment and spares holdings are optimised, while meeting customer requirements for MTTR and network availability. Spares are held in warehouse locations spread throughout the network and a quantity issued as advance spares to the field force. CBNL take care of the repair of faulty items covered by the service.",
    },
  ];
  const heroInfo = {
    page: "service-hero",
    pageHeading: "Expert Services for End-to-End Network Delivery",
    pageSubText:
      "We deliver robust, scalable network deployment and connectivity services tailored to modern infrastructure needs.",
  };
  const pageDirection = [
    {
      img: "Training.webp",
      name: "Training",
      heading: "how we train professionals",
      link: "/Training",
    },
    {
      img: "Tech.webp",
      name: "Technologies",
      heading: "Technologies used by us",
      link: "/Tech",
    },
  ];
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const measure = () => {
      const styles = getComputedStyle(el);
      const count = styles.gridTemplateColumns
        .split(" ")
        .filter(Boolean).length;
      setCols(Math.max(1, count));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
      <Hero
        page={heroInfo.page}
        pageHeading={heroInfo.pageHeading}
        pageSubText={heroInfo.pageSubText}
      />
      <main className="page-main ">
        <div className="intro-text">
          <h2>How We Deliver Network Excellence</h2>
          <p>
            Our services are designed to bring cutting-edge wireless and fiber
            solutions to life. From initial planning to final deployment, we
            ensure every project meets the highest standards of performance,
            coverage, and reliability. Whether it's RF design, fiber rollout, or
            enterprise connectivity, we deliver with precision, speed, and a
            deep understanding of local needs.
          </p>
          <p>
            Below are the solutions we provide to help drive connectivity
            forward.
          </p>
        </div>
        <div className="services-container">
          <h2>Our Services</h2>
          <div className="all-services grid-two-cols" ref={gridRef}>
            {services.map((service, i) => {
              const rowStart = i - (i % cols);
              const rowEnd = Math.min(services.length, rowStart + cols);
              const isEndOfRow = i === rowEnd - 1;
              const selectedInThisRow =
                selected !== null && selected >= rowStart && selected < rowEnd;

              return (
                <>
                  {/* CARD (grid item) */}
                  <div
                    className="each-service"
                    onClick={() => setSelected(selected === i ? null : i)}
                  >
                    <h3 className="text-center">{service.title}</h3>
                    <p className="short-message text-center">
                      {service.shortMessage}
                    </p>
                    <p className="sign">{selected === i ? "-" : "+"}</p>
                  </div>

                  {/* ROW PANEL (grid item that spans ALL columns) */}
                  {isEndOfRow && selectedInThisRow && (
                    <div className="row-expander">
                      <div className="each-service-info">
                        <p className="long-message">
                          {services[selected].info}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className="network-deploy-container">
          <h2>Network Deployment</h2>
          <p>
            We provide a range of services which ensure networks are deployed
            efficiently, meeting customer requirements. Operators are
            increasingly requiring transmission vendors to provide the
            installation and commissioning of the equipment, as well as the
            supply. We have responded, and have built up capability in wireless
            backhaul network deployment by employing professional project and
            implementation managers. Our services range from providing technical
            implementation support and project management; to taking complete
            responsibility for design, build and transfer, as a turnkey service.
          </p>
          <div className="rf-container grid-two-cols">
            <div className="rf-info">
              <h3 className="text-center">Network RF Services</h3>
              <ul>
                <div>
                  <li className="main-info">Network Planning</li>
                  <li className="extra-info">
                    Frequency Planning(Current & Future)
                  </li>
                </div>
                <div>
                  <li className="main-info">Network Design (RND & ATND)</li>
                  <li className="extra-info">Capacity Planning & Design</li>
                </div>
                <div>
                  <li className="main-info">
                    Network Tuning for Coverage Improvement
                  </li>
                </div>
                <div>
                  <li className="main-info">Network Audit & Benchmarking</li>
                </div>
                <div>
                  <li className="main-info">Optimization</li>
                </div>
              </ul>
            </div>
            <div className="rf-img-box">
              <img src="rf.jpg" alt="" />
            </div>
          </div>
          <div className="fibre-container grid-two-cols">
            <div className="fibre-img-box">
              <img src="fibres.jpg" alt="" />
            </div>
            <div className="fibre-info">
              <h3 className="text-center">Fibre Optics</h3>
              <ul>
                <li className="main-info">
                  CBNL has built capacity in planning and laying fibre optic
                  transmission cables.
                </li>
                <li className="main-info">
                  We have provided end-to-end support for several backbone,
                  metropolitan and access network projects.
                </li>
                <li className="main-info">
                  We are well equipped to lay, terminate, splice and commission
                  both single- and multi-mode cables
                </li>
                <li className="main-info">
                  We also plan, design, implement and support FTTx networks.
                </li>
                <li className="main-info">
                  Our teams have capabilities for both overhead and underground
                  fibre deployment.
                </li>
              </ul>
            </div>
          </div>
          <div className="bts-container"></div>
        </div>
        <h2>You might also like</h2>
        <div className="other-pages grid-two-cols">
          {pageDirection.map((direction) => (
            <div className="each-page">
              <img src={direction.img} alt="" />
              <div className="each-page-info">
                <p className="heading">{direction.heading}</p>
                {/* <p className="message">{direction.message}</p> */}
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
