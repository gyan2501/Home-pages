import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoCaretDownOutline } from "react-icons/io5";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [fontColor, setFontColor] = useState("white");
  const [logo, setLogo] = useState(
    "https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
  );

  const listenScrollEvent = () => {
    if (window.scrollY > 50) {
      setNavBg("#FFFFFF");
      setFontColor("#003358");
      setLogo(
        "https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"
      );
    } else {
      setNavBg("transparent");
      setFontColor("white");
      setLogo("https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      className={styles.navbar}
      style={{ backgroundColor: navBg, color: fontColor }}
    >
      <div className={styles.navbar__content}>
        <a href="/" className={styles.navbar__logo}>
          <img src={logo} alt="Logo" />
        </a>
        <div className={styles.navbar__links}>
          <a href="/" className={styles.navbar__link}>
            Home
          </a>
          <div className={styles.navbar__link}>
            <span style={{ display: "flex" }}>
              {" "}
              Industries <IoCaretDownOutline style={{ marginTop: "5px" }} />
            </span>
            <div className={styles.navbar__dropdown}>
              <a href="/" className={styles.navbar__dropdownItem}>
                Sustainability
              </a>
              <a href="/" className={styles.navbar__dropdownItem}>
                Mineral processing
              </a>
              <a href="/" className={styles.navbar__dropdownItem}>
                Mine-To-Mill-To-Mine Optimization
              </a>
              <a href="/" className={styles.navbar__dropdownItem}>
                Oil & Gas
              </a>
            </div>
          </div>
          <a href="/" className={styles.navbar__link}>
            AI Software
          </a>
          <a href="/" className={styles.navbar__link}>
            Blog
          </a>
          <a href="/#" className={styles.navbar__link}>
            Contact Us
          </a>
        </div>
        <div className={styles.navbar__toggle}>
          <FaBars onClick={() => setToggle(!toggle)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
