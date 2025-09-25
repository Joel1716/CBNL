import Hero from "../../Hero/Hero.jsx";
import { WideBandApproach } from "../Mobile/mobile";
export default function IspNetwork() {
  const heroInfo = {
    page: "Isp-hero",
    pageHeading: "ISP-Network",
  };
  return (
    <>
      <Hero page={heroInfo.page} pageHeading={heroInfo.pageHeading} />
      <main>
        <div className="intro-text solution-intro">
          <h2>Reliable ISP Network</h2>
          <p>
            Despite fibre’s unlimited capacity, the high cost (both in laying
            new fibre and leasing) and slow deployment result in the solution
            being unfeasible for many scenarios.
          </p>
          <p>
            This is especially the case for growing urban and remote locations
            where the initial customer concentration is often too low to make
            the business case for fibre.
          </p>
          <p>
            In this light, a growing number of forward thinking ISPs are
            deploying a mix of wireless solutions which offer the optimum
            balance of performance and low cost.
          </p>
          <p>
            The rise of reliable wideband wireless solutions mean ISPs no longer
            have to risk a degradation of quality of service to create the cost
            savings needed for an attractive business case.
          </p>
        </div>
        <div className="isp-solutions-container">
          <h2>Our ISP Solutions</h2>
          <p>Figure 1: High capacity corporate ISP network</p>
          <p>Figure 2: Residential ISP network middle mile</p>
          <div className="isp-solutions">
            <img src="ISP-diagram1.jpg" alt="" />
            <img src="ISP-diagram2.jpg" alt="" />
          </div>
        </div>
        <WideBandApproach>
          <p>
            Whether acting as the middle mile, or directly connecting customer
            sites – wideband PMP microwave is increasingly being selected as a
            key central element of wireless ISP networks.
          </p>
          <p>
            Wideband PMP’s suitability for ISP networks has grown due its high
            capacity, along with the cost efficiencies associated with deploying
            almost half the equipment of PTP technologies.
          </p>
          <p>
            PMP’s total cost of ownership benefits, high throughput and quick
            time to market create an attractive business case for ISPs to invest
            in the technology and increase their revenues.
          </p>
          <p>
            Competing technologies cannot compete with PMP’s business case,
            either due to higher total cost of ownership (in the case of PTP) or
            a lack of spectrum (in the case of Sub 6Ghz).
          </p>
          <p>
            Leading the way is VectaStar – the market leading the most advanced
            wideband PMP solution available.
          </p>
        </WideBandApproach>
      </main>
    </>
  );
}
