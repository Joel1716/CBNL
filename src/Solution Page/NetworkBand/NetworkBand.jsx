import Hero from "../../Hero/Hero";
import { Link } from "react-router-dom";
import TextLogo from "../../TextLogo.jsx";
export default function NetworkBand() {
  const heroInfo = {
    page: "band-hero",
    pageHeading: " E-band & V-Band Access & Backhaul Solutions",
  };
  const Info = [
    "E-Band is becoming a viable and cheap solution to ensure very high capacity",
    "Low Capex and in many cases low Opex (spectrum low cost) are the unique drivers for fast adoption",
    "Increase nodal access points beyond current capacities (>800mbps)",
    "Ease of deployment",
  ];
  return (
    <>
      <Hero page={heroInfo.page} pageHeading={heroInfo.pageHeading} />
      <main className="page-main">
        <div className="intro-text">
          <h2>Ultra-High-Capacity E-Band Solutions</h2>
          <p>
            CBNL’s E-band solutions deliver multi-gigabit wireless connectivity
            tailored for dense urban and suburban deployments. By leveraging
            high-frequency spectrum, E-band provides operators with
            cost-effective, scalable backhaul and access options to meet today’s
            growing data demands.
          </p>
        </div>
        <TextLogo
          information={Info}
          heading="E-Band Wireless in Africa"
          link="/E-Band-Info.pdf"
          img="siklu.png"
        />
      </main>
    </>
  );
}
