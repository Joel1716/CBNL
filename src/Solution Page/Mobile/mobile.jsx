import { TwoColumnLayout } from "../../Location Page/LocationPage";
import Hero from "../../Hero/Hero";
import { Expandable } from "../../Training/Training";
import { useState } from "react";
export default function MobileBackhaul() {
  const [clicked, setClicked] = useState(false);
  const datas = [
    {
      heading: "LTE proven capacity and performance",
      info: [
        "600Mb/s per link and up to 14.4Gb/s per hub site",
        "Low latency – sub 1ms round-trip",
        "Guaranteed quality of service compared to non line of sight technologies.",
      ],
    },
    {
      heading: "Rapid backhaul coverage",
      info: [
        "Quick to deploy – almost half the radios compared to point-to-point",
        "Easy to deploy and align – intelligent form factor and new smartphone App simplifies installation and alignment.",
      ],
    },
    {
      heading: "Low total cost of ownership",
      info: [
        "Significant CAPEX savings over fibre and point-to-point backhaul strategies",
        "Independently proven to deliver total cost of ownership savings of up to 50% over other forms of microwave backhaul.",
      ],
    },
    {
      heading: "Rapid backhaul coverage",
      info: [
        "Quick to deploy – almost half the radios compared to point-to-point",
        "Easy to deploy and align – intelligent form factor and new smartphone App simplifies installation and alignment.",
        "Guaranteed quality of service compared to non line of sight technologies.",
      ],
    },
  ];
  const heroInfo = {
    page: "mobile-hero",
    pageHeading: "Mobile Backhaul",
  };
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
        <div className="mobile-container">
          <TwoColumnLayout
            img="Mobile-Diagram.jpg"
            color="#f8f9fa"
            boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)"
          >
            <div className="solution-info">
              <h2>Mobile Backhaul</h2>
              <p>
                Mobile networks are being stretched by the unprecedented data
                demand from smartphones, tablets and a range of new connected
                devices. And it’s a global phenomenon.
              </p>
              <p>
                Quick deployment, high capacity and guaranteed quality of
                service are essential backhaul characteristics to support
                operators in satisfying customer expectations and fending off
                the competition.
              </p>
              <p>
                However CAPEX and OPEX constraints mean costs must be kept low
                to build successful business cases, maintaining profitability
                and offsetting declining voice revenues.
              </p>
            </div>
          </TwoColumnLayout>
          <TwoColumnLayout
            img="Mobile-Diagram2.jpg"
            color="#f8f9fa"
            reverse={true}
            boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)"
          >
            <div className="solution-info">
              <h2>Introducing enterprise access to mobile backhaul</h2>
              <p>
                Mobile networks are being stretched by the unprecedented data
                demand from smartphones, tablets and a range of new connected
                devices. And it’s a global phenomenon.
              </p>
              <p>
                Quick deployment, high capacity and guaranteed quality of
                service are essential backhaul characteristics to support
                operators in satisfying customer expectations and fending off
                the competition.
              </p>
              <p>
                However CAPEX and OPEX constraints mean costs must be kept low
                to build successful business cases, maintaining profitability
                and offsetting declining voice revenues.
              </p>
            </div>
          </TwoColumnLayout>
        </div>
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
              >
                <ul>
                  {data.info.map((eachInfo) => (
                    <li>{eachInfo}</li>
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

export function WideBandApproach({ children }) {
  return (
    <div className="wideband-approach">
      <h2>The wideband PMP approach</h2>
      <div className="wideband-info">{children}</div>
    </div>
  );
}
