import Hero from "../../Hero/Hero";
import { TextLogo } from "../NetworkBand/NetworkBand";
export default function SpaceOptics() {
  const heroInfo = {
    page: "enterprise-hero",
    pageHeading: "Free Space Optics",
  };
  const Info = [
    "Network Management System that runs on the customer server",
    "Long Range - Up to 7km",
    "Reliable - >99% uptime",
    "Next Generation product MMW Radios",
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
          heading="Benefits of FSO"
          link="/Space-Optics-Info.pdf"
          img="Sona.png"
        ></TextLogo>
      </main>
    </>
  );
}
