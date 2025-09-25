import Hero from "../../Hero/Hero";
import { TextLogo } from "../NetworkBand/NetworkBand";
export default function FibreSolution() {
  const heroInfo = {
    page: "enterprise-hero",
    pageHeading: "FIber Monitoring Solution",
  };
  const Info = [
    "24/7 in-service fiber link monitoring",
    "Identifies fiber faults vs. electronics as source of network outages",
    "Automated real-time fiber fault detection localization and notification",
    "Based on well-established OTDR technology",
  ];
  return (
    <>
      <Hero page={heroInfo.page} pageHeading={heroInfo.pageHeading} />
      <main className="page-main">
        <div className="intro-text">
          <h2>Free Space Optics</h2>
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
          heading=" Adtran’s infrastructure monitoring solution"
          link="/Fibre-Solution-Info.pdf"
          img="Adtran.png"
        ></TextLogo>
      </main>
    </>
  );
}
