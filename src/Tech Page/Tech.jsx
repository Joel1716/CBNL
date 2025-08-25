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
    {
      img: "avanti.png",
      alt: "Avanti Logo",
    },
    {
      img: "aviat.png",
      alt: "Aviat Logo",
    },
    {
      img: "ceragon.png",
      alt: "Ceragon Logo",
    },
    {
      img: "emerson.png",
      alt: "Emerson Logo",
    },
    {
      img: "ericsson.jpg",
      alt: "Ericsson Logo",
    },
    {
      img: "Huawei.png",
      alt: "Huawei Logo",
    },
    {
      img: "Newtec.png",
      alt: "Newtec Logo",
    },
    {
      img: "nokia.jpg",
      alt: "Nokia Logo",
    },
    {
      img: "raisecom.png",
      alt: "Raisecom Logo",
    },
    {
      img: "siklu.png",
      alt: "Siklu Logo",
    },
    {
      img: "tarana.png",
      alt: "Tarana Logo",
    },
    {
      img: "ZTE.png",
      alt: "ZTE Logo",
    },
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
            {techs.map((tech, value) => {
              return (
                <div key={value}>
                  <img src={`./${tech.img}`} alt={tech.alt} loading="lazy" />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
