import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import "./Header.css";
export default function StickyHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const [burgerClick, setBurgerClick] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 30);
    if (hidden) {
      setButtonClick(false);
      setBurgerClick(false);
    }
  });
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
        }`}
      >
        <img className="company-logo" src="CBNL Logo.png" alt="Company Logo" />
        <nav>
          <ul className="flex-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/solution">Solution</Link>
            </li>
          </ul>
          <div className="dropdown">
            <button
              onClick={() => setButtonClick(!buttonClick)}
              className="dropbtn"
            >
              Contact Us
            </button>
            {buttonClick && (
              <div className="dropdown-content">
                <Link to="/Isp">For ISPs</Link>
                <Link to="/Oem">For OEMs</Link>
                <Link to="/careers">Careers</Link>
              </div>
            )}
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
