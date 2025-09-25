import Hero from "../../Hero/Hero";
import { TextLogo } from "../NetworkBand/NetworkBand";
export default function FifthGeneration() {
  const heroInfo = {
    page: "enterprise-hero",
    pageHeading: "5G Solutions",
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
          <h2>High-Performance 5G Fixed Wireless Access</h2>
          <p>
            Powered by CBNL’s VectaStar technology, our 5G FWA solutions deliver
            gigabit-class connectivity over licensed spectrum. With flexible
            TDD/FDD deployment and 3GPP compliance, VectaStar supports dense
            urban and suburban broadband rollouts.
          </p>
        </div>
        <TextLogo
          information={Info}
          heading="VS-NR 5G P2MP Solution"
          link="/5G-Info.pdf"
          img="CBNG.png"
        ></TextLogo>
      </main>
    </>
  );
}
