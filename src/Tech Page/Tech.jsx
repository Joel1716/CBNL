import { div } from "motion/react-client";
import Hero from "../Hero/Hero";
import "./Tech.css";
export default function Tech() {
  const heroInfo = {
    page: "tech-hero",
    pageHeading: "Technologies That Power Connectivity",
    pageSubText:
      "Powering high-capacity, low-latency networks that keep your customers connected and your business ahead.",
  };
  const techs = [
    "avanti.png",
    "aviat.png",
    "ceragon.png",
    "emerson.png",
    "ericsson.jpg",
    "Huawei.png",
    "Newtec.png",
    "nokia.jpg",
    "raisecom.png",
    "siklu.png",
    "tarana.png",
    "ZTE.png",
  ];
  return (
    <>
      <Hero
        page={heroInfo.page}
        pageHeading={heroInfo.pageHeading}
        pageSubText={heroInfo.pageSubText}
      />
      <main className="page-main">
        <div className="intro-text">
          <h2>Innovation at the Core</h2>
          <p>
            At CBNL, we create the technology that keeps the world moving. From
            high-capacity backhaul to intelligent network management, our
            solutions deliver the speed, reliability, and scalability you need
            to connect more people, in more places with ease. Built for today,
            ready for tomorrow.
          </p>
        </div>
        <div className="tech-container">
          <h2>Our Technologies</h2>
          <div className="tech">
            {techs.map((tech) => {
              return (
                <div>
                  <img src={`./${tech}`} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
