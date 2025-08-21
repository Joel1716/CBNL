import "./solutions.css";
export default function Solutions() {
  const solutions = [
    {
      img: <img src="Rural.webp" alt="Great Barrier Reef, Australia" />,
      heading: "Rural Connectivity",
      message:
        "Affordable broadband solutions that deliver strong, stable internet to remote and underserved areas.",
    },
    {
      img: <img src="Enterprise.webp" alt="Great Barrier Reef, Australia" />,
      heading: "Enterprise Access",
      message:
        "Dedicated high-speed internet for businesses, supporting secure operations and real-time connectivity.",
    },
    {
      img: <img src="mobile.webp" alt="Great Barrier Reef, Australia" />,
      heading: "Mobile Backhaul",
      message:
        "Reliable wireless links that connect mobile towers to the core network, expanding coverage and boosting capacity.",
    },
  ];
  return (
    <section id="solutions" className="solution-section">
      <div className="solution-heading text-center">
        <h2>Our Solutions</h2>
        <p>
          We provide tailored solutions to support seamless, large-scale
          connectivity across Africa.
        </p>
      </div>
      <div className="gallery">
        {solutions.map((solution) => (
          <li>
            <figure>
              {solution.img}
              <figcaption>
                <main className="solution-main">
                  <h3>{solution.heading}</h3>
                  <p>{solution.message}</p>
                </main>
                <footer>
                  <button>Read More</button>
                </footer>
              </figcaption>
            </figure>
          </li>
        ))}
      </div>
    </section>
  );
}
