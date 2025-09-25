import Hero from "../../Hero/Hero";
import { TwoColumnLayout } from "../../Location Page/LocationPage";
import { WideBandApproach } from "../Mobile/mobile";
export default function EnterpriseAccess() {
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
  return (
    <>
      <Hero page={heroInfo.page} pageHeading={heroInfo.pageHeading} />
      <main>
        <div className="intro-text solution-intro">
          <h2>Reliable Mobile Backhaul</h2>
          <p>
            CBNL delivers robust backhaul solutions that enable ISPs and MNOs to
            expand with confidence. Our portfolio combines microwave, fibre, and
            multi-OEM integration to deliver scalable, high-capacity links that
            meet today’s growing demand for data.
          </p>
        </div>
        <TwoColumnLayout
          img="Enterprise-Diagram.jpg"
          height="auto"
          color="#f8f9fa"
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
            {provisonData.map((data) => {
              return (
                <div className="each-solution text-center">
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
      </main>
    </>
  );
}
