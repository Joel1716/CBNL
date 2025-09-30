import { useState, useEffect, useRef } from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
export default function Service() {
  const [selected, setSelected] = useState(null);
  const [arrowClick, setArrowClick] = useState(null);
  const [cols, setCols] = useState(2);
  const gridRef = useRef(null);
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
    {
      title: "Maintenance Services",
      shortMessage:
        "End-to-end network monitoring, spares, and repair services.",
      list: [
        {
          name: "Routine Monitoring, Evaluation, Testing",
        },
        {
          name: "Acceptance",
        },
        {
          name: "Preventive & Corrective Maintenance",
        },
        {
          name: "Emergency Intervention",
        },
        {
          name: "Spares Management",
        },
      ],
      img: "Maintenance.webp",
    },
    {
      title: "FTTX CAPABILITIES",
      shortMessage:
        "End-to-end network monitoring, spares, and repair services.",
      list: [
        {
          name: "ROW Acquisition",
        },
        {
          name: "Home Pass (Rollout)",
          info: [
            "Survey, design, implementation",
            "Materials supply",
            "Underground & aerial deployments",
          ],
        },
        {
          name: "Home Connect",
        },
        {
          name: "Management Services",
          info: [
            "Acceptance",
            "Quarterly PPM",
            "SPMS",
            "Network Monitoring & Optimization",
            "Fault resolution",
            "Reporting",
          ],
        },
      ],
      img: "FTTX.webp",
    },
    {
      title: "Smart Logistics Management",
      shortMessage:
        "End-to-end network monitoring, spares, and repair services.",
      list: [
        {
          name: "Procurement & Warehousing",
          info: [
            "Bulk procurement of imported components, with agreed batch delivery schedule to match project plan",
            "Tested logistics partners to manage pre-shipment inspection, freight, local clearing & delivery, including documentation and regulatory compliance",
            "Long-term contracts for local fabrication, galvanization and delivery of metal works",
          ],
        },
        {
          name: "Distribution",
          info: [
            "Logistics partners deliver materials to CBNL’s regional warehouses",
            "Materials issued in batches from nearest warehouse to field teams in line with implementation schedule",
          ],
        },
        {
          name: "Security & Risk Management",
          info: [
            "International freight insurance",
            "Goods in transit insurance",
            "Fire & burglary insurance",
            "Real-time tracking of goods in transit",
            "Automated inventory management system tracks material utilization based on Work Orders",
            "Periodic physical stock counts",
          ],
        },
      ],
      img: "Logistics.webp",
    },
    {
      title: "Network RF Services",
      shortMessage:
        "End-to-end network monitoring, spares, and repair services.",
      list: [
        {
          name: "Network Planning",
        },
        {
          name: "Network Design (RND & ATND)",
        },
        {
          name: "Network Tuning for Coverage Improvement",
        },
        {
          name: "Network Audit & Benchmarking",
        },
        {
          name: "Optimization",
        },
      ],
      extraInfo: [
        "Frequency Planning(Current & Future)",
        "Capacity Planning & Design",
      ],
      img: "RF.webp",
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
      fallBackImg: "Training.jpg",
      name: "Training",
      heading: "how we train professionals",
      link: "/Training",
      alt: "A constructor woman standing, holding and looking at an open laptop",
    },
    {
      img: "Tech.webp",
      fallBackImg: "Tech.jpg",
      name: "Technologies",
      heading: "Technologies used by us",
      link: "/Tech",
      alt: "A hand typing on a laptop with blue tech icons at the center",
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
            {services.map((service, value) => {
              const rowStart = value - (value % cols);
              const rowEnd = Math.min(services.length, rowStart + cols);
              const isEndOfRow = value === rowEnd - 1;
              const selectedInThisRow =
                selected !== null && selected >= rowStart && selected < rowEnd;

              return (
                <>
                  <div
                    className="each-service"
                    onClick={() =>
                      setSelected(selected === value ? null : value)
                    }
                  >
                    <h3 className="text-center">{service.title}</h3>
                    <p className="short-message text-center">
                      {service.shortMessage}
                    </p>
                    <p className="service-sign">
                      {selected === value ? "-" : "+"}
                    </p>
                  </div>

                  {isEndOfRow && selectedInThisRow && (
                    <div className="row-expander">
                      <div className="each-service-info">
                        {service.info ? (
                          <p className="long-message">
                            {services[selected].info}
                          </p>
                        ) : (
                          <DeplomentServices
                            img={services[selected].img}
                            extension="jpg"
                            imgBox="each-service-img"
                          >
                            <ul>
                              {services[selected].list.map((list, value) => (
                                <EachPoint
                                  key={value}
                                  list={list}
                                  services={services}
                                  selected={selected}
                                  index={value}
                                  isOpen={arrowClick === value}
                                  onToggle={() =>
                                    setArrowClick(
                                      arrowClick === value ? null : value
                                    )
                                  }
                                />
                              ))}
                            </ul>
                          </DeplomentServices>
                        )}
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <NetworkDeployment />
        <h2>You might also like</h2>
        <div className="other-pages grid-two-cols">
          {pageDirection.map((direction, value) => (
            <div key={value} className="each-page">
              <picture>
                <source srcSet={direction.img} type="image/webp" />
                <source srcSet={direction.fallBackImg} type="image/jpeg" />
                <img
                  src={direction.fallBackImg}
                  alt={direction.alt}
                  loading="lazy"
                />
              </picture>
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

function EachPoint({ list, index, isOpen, onToggle, services, selected }) {
  return (
    <div className={`${isOpen ? "arrow-click" : ""} each-point`}>
      <li className="main-info flex-center">
        {list.name}
        {list.info && (
          <span onClick={onToggle} className="icon">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path>
              </svg>
            )}
          </span>
        )}
      </li>
      {isOpen && list.info && (
        <div className="info-container">
          {list.info.map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </div>
      )}

      {services[selected].extraInfo &&
        index < services[selected].extraInfo.length && (
          <li className="extra-info">{services[selected].extraInfo[index]}</li>
        )}
    </div>
  );
}

function NetworkDeployment() {
  return (
    <div className="network-deploy-container">
      <h2>Network Deployment</h2>
      <p>
        We provide a range of services which ensure networks are deployed
        efficiently, meeting customer requirements. Operators are increasingly
        requiring transmission vendors to provide the installation and
        commissioning of the equipment, as well as the supply. We have
        responded, and have built up capability in wireless backhaul network
        deployment by employing professional project and implementation
        managers. Our services range from providing technical implementation
        support and project management; to taking complete responsibility for
        design, build and transfer, as a turnkey service.
      </p>
      <div className="deployment-outer-container">
        <DeplomentServices
          img="Microwave.webp"
          alt="A Tower"
          color="#f8f9fa"
          extension="jpg"
        >
          <h3 className="text-center">Microwave Implementation & Support</h3>
          <ul>
            <li className="main-info">
              We have implemented 40,000+ Point-to-Point and Point-to-Multipoint
              radios from Cambridge, Ceragon, Aviat, Ericsson, Huawei, SIAE,
              Cambium, Tarana and other OEMs.
            </li>
            <li className="main-info">
              We have implemented numerous projects across Africa, including
              Nigeria, Ghana, Kenya, Guinea, Congo DRC, Congo Brazzaville,
              Angola, Somalia, Sudan, South Africa, etc.
            </li>
            <li className="main-info">
              We provide online/on-site support and planned maintenance for
              various technologies and operators, including MTN, Airtel,
              Safaricom, Vodacom, Vodafone, Telkom and Liquid.
            </li>
          </ul>
        </DeplomentServices>
        <DeplomentServices
          img="fibre.webp"
          alt="FIbres connected in an ODF"
          color="#f8f9fa"
          extension="jpg"
        >
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
              We are well equipped to lay, terminate, splice and commission both
              single- and multi-mode cables
            </li>
            <li className="main-info">
              We also plan, design, implement and support FTTx networks.
            </li>
            <li className="main-info">
              Our teams have capabilities for both overhead and underground
              fibre deployment.
            </li>
          </ul>
        </DeplomentServices>
        <DeplomentServices
          img="VSAT.webp"
          alt="Satellite Dishes"
          color="#f8f9fa"
          extension="jpg"
        >
          <h3 className="text-center">VSAT Sytems</h3>
          <ul>
            <li className="main-info">
              We plan, install and manage VSAT Systems and wireless broadband
              internet services on different satellite platforms. We are
              currently Africa service partners to Avanti
            </li>
            <li className="main-info">
              To date, our engineers have installed over 500 satellite earth
              stations across Nigeria.
            </li>
          </ul>
        </DeplomentServices>
        <DeplomentServices
          img="BTS.webp"
          alt="Top of a Tower"
          color="#f8f9fa"
          extension="jpg"
        >
          <h3 className="text-center">Base Station(BTS)</h3>
          <ul>
            <li className="main-info">
              Our engineers are trained and certified to deploy and support RBS,
              Tx and power equipment from the world’s top OEMs including
              Ericsson, Huawei, ZTE and Emerson.
            </li>
            <li className="main-info">
              We carry out site BTS construction works for greenfield and
              rooftop turnkey sites – procurement, site acquisition, TSS,
              design, implementation and handover.
            </li>
            <li className="main-info">
              We install, commission, integrate, and maintain base transmitting
              stations for 2G, 3G and LTE services.
            </li>
            <li className="main-info">
              We carryout RF optimization of BTS sites from single and cluster
              site verifications.
            </li>
          </ul>
        </DeplomentServices>
      </div>
    </div>
  );
}

function DeplomentServices({
  img,
  alt,
  extension,
  imgBox = "deployment-img-box",
  color,
  children,
}) {
  const infoContainer = {
    backgroundColor: color,
  };
  return (
    <div
      style={infoContainer}
      className="deployment-inner-container grid-two-cols"
    >
      <div className="deployment-info">{children}</div>
      <div className={imgBox}>
        <picture>
          <source srcSet={img} type="image/webp" />
          <source
            srcSet={img.split(".").slice(0, -1).join(".") + `.${extension}`}
            type="image/jpeg"
          />
          <img
            src={img.split(".").slice(0, -1).join(".") + `.${extension}`}
            alt={alt}
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
}
