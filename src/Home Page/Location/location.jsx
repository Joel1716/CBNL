import "./location.css";
import { Link } from "react-router-dom";
export default function Location() {
  return (
    <div className="location-section grid-two-cols">
      <div className="location-heading">
        <h2>Our Prescence</h2>
        <p>
          Connecting Africa, Country by Country with deployment in Nigeria,
          Ghana, South Africa and beyond
        </p>
        <p>
          We partner with leading operators and enterprises across Africa,
          delivering high-speed broadband that powers communities, businesses,
          and governments.{" "}
        </p>
        <button>
          <Link to="/Location">Where We Operate</Link>
        </button>
      </div>
      <div className="map-container">
        <img
          src="Map.webp"
          alt="Map of Africa highlighted with countries CBNL operate in"
          loading="lazy"
        />
      </div>
    </div>
  );
}
