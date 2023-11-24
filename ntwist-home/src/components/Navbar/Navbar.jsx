// Importing necessary dependencies and styles
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoCaretDownOutline } from "react-icons/io5";
import styles from "./Navbar.module.css"; // Importing CSS styles for the Navbar component

// Navbar component definition
const Navbar = () => {
  // State variables to manage various aspects of the Navbar
  const [toggle, setToggle] = useState(false); // For controlling menu toggle on small screens
  const [navBg, setNavBg] = useState("transparent"); // For managing navigation bar background color
  const [fontColor, setFontColor] = useState("white"); // For managing navigation bar font color
  const [logo, setLogo] = useState(
    // For managing the logo image URL
    "https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
  );

  // Function to handle scroll event and adjust navbar styles
  const listenScrollEvent = () => {
    if (window.scrollY > 50) {
      setNavBg("#FFFFFF"); // Changing background to white when scrolled down
      setFontColor("#003358"); // Changing font color when scrolled down
      setLogo(
        // Changing logo to a darker version when scrolled down
        "https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"
      );
    } else {
      setNavBg("transparent"); // Reverting background to transparent when at the top
      setFontColor("white"); // Reverting font color to white when at the top
      setLogo(
        // Reverting logo to the lighter version when at the top
        "https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
      );
    }
  };

  // Adding scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    // Removing scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  // Return JSX representing the Navbar component
  return (
    <div
      className={styles.navbar} // Applying the styles from the imported CSS module
      style={{ backgroundColor: navBg, color: fontColor }} // Applying dynamic styles based on state
    >
      <div className={styles.navbar__content}>
        <a href="/" className={styles.navbar__logo}>
          <img src={logo} alt="Logo" />
        </a>
        <div
          className={`${styles.navbar__links} ${toggle ? styles.active : ""}`}
        >
          {/* Links for different sections */}
          <a href="/" className={styles.navbar__link}>
            Home
          </a>
          <div className={styles.navbar__link}>
            <span style={{ display: "flex" }}>
              {" "}
              Industries <IoCaretDownOutline style={{ marginTop: "5px" }} />
            </span>
            {/* Dropdown menu for Industries */}
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
          {/* Other navigation links */}
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
        {/* Toggle icon for small screens */}
        <div
          className={styles.navbar__toggle}
          onClick={() => setToggle(!toggle)}
        >
          <FaBars style={{ fontSize: "30px", color: "#003358" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar; // Exporting the Navbar component for use in other parts of the application
