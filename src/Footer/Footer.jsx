import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  const links = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/services",
      name: "Services",
    },
    {
      link: "/solution",
      name: "Solutions",
    },
    {
      link: "/Tech",
      name: "Technologies",
    },
    {
      link: "/Exec",
      name: "Executives",
    },
    {
      link: "/Training",
      name: "Training",
    },
    {
      link: "/Policy",
      name: "Policy",
    },
    {
      link: "/Support",
      name: "Support",
    },
  ];
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="company-info">
          <img
            className="company-logo"
            src="CBNL Logo.png"
            alt="Company Logo"
            loading="lazy"
          />
          <p>
            CBNL delivers high-performance broadband infrastructure and
            solutions across Africa
          </p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <nav>
            <ul className="grid-two-cols">
              {links.map((eachLink, value) => {
                return (
                  <li key={value}>
                    <Link to={eachLink.link}>{eachLink.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="contact-address">
          <h3>Contact Info</h3>
          <div className="contacts">
            <div className="address">
              <p>
                21 Olori Muyibat Oyefusi street, off Ladipo Omotosho cole
                street, lekki phase 1
              </p>
            </div>
            <div className="email">
              <p>joel@gmail.com</p>
            </div>
            <div className="media-links">
              <div>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Get-In-Touch">
          <h3>Get In Touch</h3>
          <div className="contact-links">
            <div>
              <Link to="/ISP">ISP Team</Link>
            </div>
            <div>
              <Link to="/OEM">OEM Team</Link>
            </div>
            <div>
              <Link to="/Support">Support</Link>
            </div>
            <div>
              <Link to="/Reach-Us">Reach Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
