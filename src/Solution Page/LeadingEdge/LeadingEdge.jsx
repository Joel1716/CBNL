import Hero from "../../Hero/Hero";
export default function LeadingEdge() {
  const heroInfo = {
    page: "leading-edge-hero",
    pageHeading: "Sub 6GHZ Unlicensed Leading-Edge Solutions",
  };
  const mimosaInfo = [
    {
      mainInfo: "Products in the Sub-6GHZ bands",
    },
    {
      mainInfo: "Supporting both PTP & PMP",
    },
    {
      mainInfo:
        "Next generation (NG) products to compete with the best in market for both",
      secondaryInfo: [
        "Peformance",
        "Pricing.  Covering entry level and NG ranges",
      ],
    },
    {
      mainInfo: "Excellent lead times",
    },
    {
      mainInfo: "Backed by CBNLA pan-african support organisation",
    },
    {
      mainInfo: "Full product review available on request",
    },
  ];
  return (
    <>
      <Hero page={heroInfo.page} pageHeading={heroInfo.pageHeading} />
      <main className="page-main">
        <div className="intro-text">
          <h2>Mimosa</h2>
          <p>
            CBNL partners with Mimosa to deliver cost-effective wireless
            solutions designed for high-capacity backhaul and enterprise access.
            Mimosa’s feature-rich radios provide reliability, scalability, and
            fast deployment options for ISPs and enterprises.”
          </p>
        </div>
        <div className="mimosa-container">
          <img src="Mimosa.png" alt="Mimosa Logo" loading="lazy" />
          <ul>
            {mimosaInfo.map((info, value) => {
              return (
                <div key={value}>
                  <li>{info.mainInfo}</li>
                  <div className="secondary-info">
                    {info.secondaryInfo &&
                      info.secondaryInfo.map((info, value) => (
                        <li key={value}>{info}</li>
                      ))}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
