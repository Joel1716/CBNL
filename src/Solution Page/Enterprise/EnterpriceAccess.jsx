import Hero from "../../Hero/Hero.jsx";
import TwoColumnLayout from "../../TwoColumnLayout.jsx";
import WideBandApproach from "../../WideBandApproach.jsx";
import Expandable from "../../Expandable.jsx";
import { useState } from "react";
export default function EnterpriseAccess() {
  const [clicked, setClicked] = useState(false);
  const heroInfo = {
    page: "enterprise-hero",
    pageHeading: "Enterprise Access",
  };
  const provisonData = [
    {
      heading: "Small, medium and large corporates",
      info: "Enabling quick connection to business critical activities, such as security, multi-site connectivity and high speed cloud services.",
    },
    {
      heading: "Utility companies",
      info: "Enabling cost effective, fast and secure data transfer between sites - key to overcoming distance barriers and creating high performing organisations.",
    },
    {
      heading: "Governments",
      info: "Enabling flexible and reliable connection of essential services - from secure multi-site connectivity, to smart city applications.",
    },
  ];
  const datas = [
    {
      heading: "Connect new enterprises quickly",
      info: [
        "Quick to deploy – almost half the radios compared to point-to-point",
        "Easy to deploy and align – intelligent form factor and new smartphone App simplifies and speeds up installation and alignment",
        "Quick to grow – sector coverage enables new enterprise sites to be connected quickly by a single installation team, without a visit to the access point or the need of additional spectrum.",
      ],
    },
    {
      heading: "Create a rapid return on investment",
      info: [
        "Significant CAPEX savings over fibre and point-to-point backhaul strategies",
        "Create a fast-time-to-revenue by utilising CBNL’s pay as you grow pricing model",
        "Save significant OPEX when customers leave or move – simply redeploy and connect the customer premises equipment to a new site within the sector. There is no need to visit or change any equipment at the hub site.",
        "Independently proven to deliver total cost of ownership savings of up to 50% over competing technology.",
      ],
    },
    {
      heading: "24/7 capacity, security and reliability",
      info: [
        "High capacity: supporting up to 600Mb/s per link and up to 14.4Gb/s per hub site",
        "Highly secure proprietary radio interface.",
        "Future proof and guaranteed quality of service compared to non line of sight technologies.",
      ],
    },
    {
      heading: "Custom quality of service profiles",
      info: ["No Extra Info"],
    },
    {
      heading: "Identify new revenue opportunities",
      info: [
        "VectaStar’s unique optimisation software enables easy identification of spare capacity – highlighting where more customers can be supported new revenue opportunities exist.",
      ],
    },
  ];
  return (
    <>
      <Hero page={heroInfo.page} pageHeading={heroInfo.pageHeading} />
      <main>
        <div className="intro-text solution-intro">
          <h2>Secure Enterprise Connectivity</h2>
          <p>
            Our enterprise access solutions offer dedicated, high-speed links
            for offices, campuses, and multisite businesses. We deliver secure,
            SLA-backed connectivity to power critical operations.
          </p>
        </div>
        <TwoColumnLayout
          img="Enterprise-Diagram.jpg"
          height="auto"
          boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)"
          color="#f8f9fa"
          alt="Enterprise-Diagram"
        >
          <div className="solution-info">
            <h2>Enterprise Access</h2>
            <p>
              High capacity connectivity is the lifeblood of modern enterprises
              who require secure carrier-class services 24/7.
            </p>
            <p>
              For the service providers who offer this connectivity, the demands
              are high.
            </p>
            <p>
              Operators require cost effective solutions to deliver tiered
              throughput levels and guaranteed quality of service – often under
              very short timeframes.
            </p>
            <p>
              It’s essential that this network infrastructure provides quick
              connectivity and crucially creates a rapid return on investment
              for the operator.
            </p>
          </div>
        </TwoColumnLayout>

        <section className="solution-outer-provision-container">
          <h2 className="solution-provision-heading">
            Service providers utilise CBNL solutions to provide connectivity
            for:
          </h2>
          <div className="solution-inner-provision-container">
            {provisonData.map((data, value) => {
              return (
                <div key={value} className="each-solution text-center">
                  <h3>{data.heading}</h3>
                  <p>{data.info}</p>
                </div>
              );
            })}
          </div>
        </section>

        <WideBandApproach>
          <p>
            The choice of infrastructure for enterprise access covers wired and
            wireless technologies, however not all offer the optimum
            price/performance ratio to build the most attractive business case.
          </p>
          <p>
            Despite the capacity offered by fibre and some point-to-point
            microwave solutions, neither provide the quick deployment and low
            cost required to make an attractive business case.
          </p>
          <p>
            The evolution of PMP microwave – with capacity now rivalling its PTP
            counterparts, feature rich functionality and unparalleled cost
            savings – has led to the technology being the solution of choice by
            the world’s leading service providers.
          </p>
          <p>
            Leading the way is VectaStar – the market’s leading wideband PMP
            solution which serves 1000’s of businesses across the globe.
          </p>
        </WideBandApproach>
        <div className="expandable">
          <h2>The VectaStar solution</h2>
          {datas.map((data, value) => {
            return (
              <Expandable
                onCourseClick={setClicked}
                courseClick={clicked}
                heading={data.heading}
                value={value}
                key={value}
              >
                <ul>
                  {data.info.map((eachInfo, value) => (
                    <li key={value}>{eachInfo}</li>
                  ))}
                </ul>
              </Expandable>
            );
          })}
        </div>
      </main>
    </>
  );
}
