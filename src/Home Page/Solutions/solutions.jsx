import "./solutions.css";
import { Link } from "react-router-dom";
export default function Solutions() {
  const solutions = [
    {
      img: "ISP-Networks.webp",
      heading: "ISP-Network",
      message:
        "High-capacity microwave and fibre solutions enabling reliable backhaul for ISPs, MNOs, and enterprises.",
      alt: "Building Connected with Blue Network Lines",
    },
    {
      img: "Enterprise.webp",
      heading: "Enterprise Access",
      message:
        "Dedicated high-speed internet for businesses, supporting secure operations and real-time connectivity.",
      alt: "Top of a white Tower with rectangular antennas on them in an environment with lots of trees",
    },
    {
      img: "mobile.jpg",
      heading: "Mobile Backhaul",
      message:
        "Reliable wireless links that connect mobile towers to the core network, expanding coverage and boosting capacity.",
      alt: "Tower with Wrectangular antennas on them",
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
        {solutions.map((solution, value) => (
          <li key={value}>
            <figure>
              <img src={solution.img} loading="lazy" />
              <figcaption>
                <main className="solution-main">
                  <h3>{solution.heading}</h3>
                  <p>{solution.message}</p>
                </main>
                <footer>
                  <button>
                    <Link to="/solution">Read More</Link>
                  </button>
                </footer>
              </figcaption>
            </figure>
          </li>
        ))}
      </div>
    </section>
  );
}
