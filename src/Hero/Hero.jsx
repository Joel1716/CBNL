import "./Hero.css";
import { Link } from "react-router-dom";
export default function Hero({ page, pageHeading, pageSubText, buttonText }) {
  return (
    <>
      <section className={`hero-section ${page}`}>
        <div className="hero-info text-center">
          <h1>{pageHeading}</h1>
          {pageSubText && <p>{pageSubText}</p>}
          {buttonText && (
            <button>
              <Link to="/services">Discover Our Services</Link>
            </button>
          )}
        </div>
      </section>
    </>
  );
}
