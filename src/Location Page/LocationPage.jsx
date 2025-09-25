import { useState } from "react";
import Hero from "../Hero/Hero";
import { Link } from "react-router-dom";
import "./LocationPage.css";
export default function LocationPage() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = ["Nigeria", "Ghana", "Kenya", "South Africa"];
  const mainCountryData = [
    {
      info: [
        "Local knowledge and relationships",
        "Existing strong presence – coverage across most regions",
        "Knowledge and understanding of solutions from all major vendors",
        "17 Regional Support Centres with warehousing across Nigeria",
      ],
      clients: ["MTN.svg", "INQ.png", "airtel.png", "9-mobile.png"],
      image: "Nigerias.jpg",
    },
    {
      info: [
        "Fully registered – Cambridge Broadband Networks Ghana Limited",
        "12 local teams led by seasoned field engineers",
        "Supported by design, planning and implementation experts",
        "Main warehouse in Accra, supported by 3 regional warehouses",
      ],
      clients: ["MTN.svg", "Vodafone.svg"],
      image: "Ghana-Area.jpg",
    },
    {
      info: [
        "Fully registered – ETNS Projects Limited",
        "15 local teams led by seasoned field engineers",
        "Supported by design, planning and implementation experts",
        "Main warehouse in Nairobi, supported by 4 regional warehouses",
      ],
      clients: [
        "safaricom.png",
        "airtel.png",
        "Telkom.png",
        "Liquid.png",
        "bayobab.svg",
      ],
      image: "Kenya-Area.jpg",
    },
    {
      info: [
        "Fully registered – CBNL SA Limited",
        "6 local teams led by seasoned field engineers",
        "Supported by design, planning and implementation experts",
        "Main warehouse in Johannesburg, supported by 3 regional warehouses",
      ],
      clients: ["MTN.svg", "Liquid.png", "vodacom.png"],
      image: "SA-Area.jpg",
    },
  ];
  const otherCountryData = [
    {
      name: "Congo DRC",
      flag: "democratic-republic-of-congo-flag.png",
      clients: ["airtel.png", "vodacom.png", "bayobab.svg"],
    },
    {
      name: "Congo Brazzaville",
      flag: "republic-of-congo-flag.png",
      clients: ["MTN.svg"],
    },
    {
      name: "South Sudan",
      flag: "south-sudan-flag.png",
      clients: ["MTN.svg"],
    },
    {
      name: "Tanzania",
      flag: "tanzania-flag.png",
      clients: ["vodacom.png"],
    },
    {
      name: "Botswana",
      flag: "botswana-flag.png",
      clients: ["MTN.svg"],
    },
    {
      name: "Guinea",
      flag: "guinea-flag.png",
      clients: ["MTN.svg"],
    },
    {
      name: "Angola",
      flag: "angola-flag.png",
      clients: ["Unitel.jpg"],
    },
  ];
  const cameroonData = {
    info: [
      "Registered – CBNL CIV Limited",
      "Licensed to vend & install equipment",
      "Local teams trained and certified in major OEM technologies & QSHE compliant",
      "Warehousing & logistics facilities fully set up in Abidjan",
    ],
    image: "Cameroon.jpg",
  };
  const heroInfo = {
    page: "location-hero",
    pageHeading: "Where We Operate",
    pageSubText:
      "Strong regional presence from Nigeria to South Africa with local support centres, warehousing and engineering teams.",
  };
  return (
    <>
      <Hero
        page={heroInfo.page}
        pageHeading={heroInfo.pageHeading}
        pageSubText={heroInfo.pageSubText}
      />
      <main>
        <section className="location-main ">
          <div className="intro-text">
            <h2>Our Presence Across Africa</h2>
            <p>
              At CBNL Africa, our reach extends across multiple African markets,
              where we partner with mobile network operators, and enterprises to
              deliver high-capacity connectivity. From urban hubs to rural
              regions, we support national broadband initiatives, power
              enterprise networks, and enable mobile expansion. In each country
              we operate, our solutions are tailored to local needs, ensuring
              reliable coverage, improved digital access, and sustainable
              growth.
            </p>
          </div>
          <TabsContainer
            tabs={tabs}
            currentTab={currentTab}
            onCurrentTab={setCurrentTab}
          />
          <MainCountries
            tabs={tabs}
            currentTab={currentTab}
            mainCountryData={mainCountryData}
          />
          <h2>Also Present in</h2>
          <div className="other-countries-container">
            {otherCountryData.map((data) => {
              return (
                <div className="other-country">
                  <h4>{data.name}</h4>
                  <Clients
                    clients={data.clients}
                    width="8rem"
                    minWidth="10rem"
                  />
                </div>
              );
            })}
          </div>
        </section>
        <h2>Expanding Our Footprint</h2>
        <section className="expansion-country-container">
          <div className="expansion-country">
            <TwoColumnLayout img={cameroonData.image}>
              <div className="country-info">
                <h3>Cameroon</h3>
                <p>
                  We’re growing our footprint in Africa. Cameroon is now open
                  for business, and if you need us in our regions, our teams are
                  ready to support you.
                </p>
                <ul>
                  {cameroonData.info.map((data) => {
                    return <li>{data}</li>;
                  })}
                </ul>
                {/* <button>
                  <Link>Contact Us</Link>
                </button> */}
              </div>
            </TwoColumnLayout>
          </div>
        </section>
      </main>
    </>
  );
}

function TabsContainer({ tabs, currentTab, onCurrentTab }) {
  return (
    <div className="tabs-container">
      {tabs.map((tab, value) => {
        return (
          <div
            onClick={() => onCurrentTab(value)}
            className={currentTab === value ? "active-tab" : ""}
          >
            <p>{tab}</p>
          </div>
        );
      })}
    </div>
  );
}

function MainCountries({ tabs, mainCountryData, currentTab }) {
  return (
    <div className="main-countries-container">
      <TwoColumnLayout
        img={mainCountryData[currentTab].image}
        alt="Nigeria Map"
        color="#f8f9fa"
      >
        <div className="country-info">
          <h3>{tabs[currentTab]}</h3>
          <p>
            We are uniquely positioned to deliver major projects across{" "}
            {tabs[currentTab]}:
          </p>
          {console.log(mainCountryData[currentTab])}
          <ul>
            {mainCountryData[currentTab].info.map((data) => {
              return <li>{data}</li>;
            })}
          </ul>
          <h4>MNO's and InfraCos we work with</h4>
          <Clients
            clients={mainCountryData.at(currentTab).clients}
            width="10rem"
            minWidth="14rem"
          />
        </div>
      </TwoColumnLayout>
    </div>
  );
}

export function TwoColumnLayout({
  img,
  alt,
  color,
  reverse = false,
  boxShadow,
  children,
}) {
  const containerStyles = {
    boxShadow: boxShadow,
    backgroundColor: color,
  };
  return (
    <div style={containerStyles}>
      <div className={`column-container ${reverse ? "reverse" : ""}`}>
        {children}
        <div className="column-image">
          <img src={img} alt={alt} />
        </div>
      </div>
    </div>
  );
}

function Clients({ clients, width, minWidth }) {
  const container = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
    alignItems: "center",
    rowGap: "3rem",
  };
  const style = {
    width,
  };
  return (
    <div style={container}>
      {clients.map((client) => (
        <div>
          <img style={style} src={client} alt="" />
        </div>
      ))}
    </div>
  );
}
