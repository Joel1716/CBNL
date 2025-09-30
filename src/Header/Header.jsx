import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Header.css";
export default function StickyHeader({ navClick, onNavClick }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [burgerClick, setBurgerClick] = useState(false);
  const [pageInfo, setPageInfo] = useState({
    img: "",
    pages: [],
    pageLink: [],
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 30);
    if (hidden) {
      onNavClick(null);
      setBurgerClick(false);
    }
  });
  const location = useLocation();
  useEffect(() => {
    setBurgerClick(false);
  }, [location]);
  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`flex-center ${scrolled ? "nav-scrolled" : ""} ${
          burgerClick ? "open" : "close"
        } ${navClick ? "nav-shown" : ""}`}
      >
        <img className="company-logo" src="CBNL-Logo.png" alt="Company Logo" />
        <nav>
          <ul className="flex-center">
            <li
              onClick={() => {
                onNavClick(null);
              }}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={navClick === "about" ? "about-link" : ""}
              onClick={() => {
                onNavClick(navClick === "about" ? null : "about");
                setPageInfo({
                  img: "/about.webp",
                  pages: [
                    "About Us",
                    "Executives",
                    "Policy",
                    "Where we operate",
                  ],
                  pageLink: ["/about", "/Exec", "/Policy", "/Location"],
                });
              }}
            >
              About
              {navClick === "about" && <ExtraLinks pageInfo={pageInfo} />}
            </li>
            <li
              className={navClick === "services" ? "service-link" : ""}
              onClick={() => {
                onNavClick(navClick === "services" ? null : "services");
                setPageInfo({
                  img: "/services.webp",
                  pages: ["Services", "Training"],
                  pageLink: ["/services", "/Training"],
                });
              }}
            >
              Services
              {navClick === "services" && <ExtraLinks pageInfo={pageInfo} />}
            </li>
            <li
              className={navClick === "solution" ? "solution-link" : ""}
              onClick={() => {
                onNavClick(navClick === "solution" ? null : "solution");
                setPageInfo({
                  img: "/solution.webp",
                  pages: ["Solution", "Technologies"],
                  pageLink: ["/solution", "/Tech"],
                });
              }}
            >
              Solution
              {navClick === "solution" && <ExtraLinks pageInfo={pageInfo} />}
            </li>
          </ul>
          {navClick === "about" ||
          navClick === "services" ||
          navClick === "solution" ||
          navClick === "contact" ? (
            <DropDown pageInfo={pageInfo} />
          ) : (
            ""
          )}
          <div className="dropdown">
            <button
              className={`${navClick === "contact" ? "contact-link" : ""}`}
              onClick={() => {
                onNavClick(navClick === "contact" ? null : "contact");
                setPageInfo({
                  img: "/Support.webp",
                  pages: ["For ISPs", "For OEMs", "Support", "Reach Us"],
                  pageLink: ["/ISP", "/OEM", "/Support", "/Reach-Us"],
                });
              }}
            >
              <p>Contact Us</p>
              {navClick === "contact" && <ExtraLinks pageInfo={pageInfo} />}
            </button>
          </div>
        </nav>
        <div className="hamburger" onClick={() => setBurgerClick(!burgerClick)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </motion.header>
    </>
  );
}

function DropDown({ pageInfo: { img, pageLink, pages } }) {
  return (
    <div className="nav-dropdown">
      <img src={img} alt="" />
      <div className="nav-dropdown-content">
        <ul>
          {pageLink.map((link, value) => {
            return (
              <li key={value}>
                <Link to={link}>{pages[value]}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
function ExtraLinks({ pageInfo: { pageLink, pages } }) {
  return (
    <div className="extra-links">
      <ul>
        {pageLink.map((link, value) => {
          return (
            <li key={value}>
              <Link to={link}>{pages[value]}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
