import { Link } from "react-router-dom";
import "./cta.css";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
export default function Cta() {
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.hash) {
  //     const el = document.getElementById(location.hash.replace("#", ""));
  //     if (el) {
  //       el.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [location]);
  const targets = [
    {
      heading: "Partner With Us",
      buttonText: "Connect with our team → ",
      to: "/ISP",
    },
    {
      heading: "Join Our Supply Chain",
      buttonText: "Become an OEM partner →",
      to: "/OEM",
    },
    {
      heading: "Explore Careers",
      buttonText: "View job openings → ",
      to: "/",
    },
  ];
  return (
    <div id="cta" className="cta-section">
      <div className="cta">
        <div className="cta-heading text-center">
          <h3>Powering Broadband Infrastructure Across Africa</h3>
          <p>
            Whether you're an ISP, supplier, or professional. Let's build the
            future of broadband together.
          </p>
        </div>
        <div className="button-container">
          {targets.map((target) => {
            return (
              <div>
                <h3 className="target-heading">{target.heading}</h3>
                <button className="target-button">
                  <Link to={target.to}>{target.buttonText}</Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
