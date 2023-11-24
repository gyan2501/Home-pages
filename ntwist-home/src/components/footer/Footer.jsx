import React from "react";
import styles from "./Footer.module.css"; // Import the external CSS file for styling
import { FaTwitter } from 'react-icons/fa' // Import Twitter icon from react-icons/fa
import { BsLinkedin } from 'react-icons/bs' // Import LinkedIn icon from react-icons/bs

const Footer = () => {
  return (
    <footer className={styles.footer}> {/* Create a footer element with class name 'footer' */}
      <div className={styles.footer__container}> {/* Create a container div within the footer */}
        <h1 className={styles.footer__title}>
          {/* Logo */}
          <img className={styles.footer__img} src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" /> {/* Display a logo image */}
        </h1>
        {/* Footer list */}
        <ul className={styles.footer__list}> {/* Create an unordered list with class name 'footer__list' */}
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
          <li>Site map</li>
        </ul>
        <span className={styles.footer__address}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</span>
        {/* Social links of footer */}
        <div className={styles.footer__social}> {/* Create a div for social links with class name 'footer__social' */}
          <FaTwitter /> {/* Render Twitter icon */}
          <BsLinkedin /> {/* Render LinkedIn icon */}
        </div>

         {/* Display an address */}
        <span className={styles.footer__address}>&#169; 2022. Ntwist Inc.</span> {/* Display a copyright notice */}
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component as the default export