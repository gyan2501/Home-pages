import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import styles from "./ScrollButton.module.css";

const ScrollButton = () => {
  // State to manage visibility of the scroll button
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show/hide scroll button based on scroll position
    const toggleVisibility = () => {
      if (window.scrollY > 300) { // If the scroll position is greater than 300px from the top
        setIsVisible(true); // Show the scroll button
      } else {
        setIsVisible(false); // Hide the scroll button
      }
    };

    // Adding scroll event listener when the component mounts
    window.addEventListener("scroll", toggleVisibility);

    // Removing scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth" // Scroll behavior set to smooth for a smooth scrolling effect
    });
  };

  return (
    <div>
      {/* Rendering the scroll button if isVisible state is true */}
      {isVisible && (
        <button className={styles.scrollBtn} onClick={scrollToTop}>
          <IoIosArrowUp /> {/* Arrow-up icon */}
        </button>
      )}
    </div>
  );
};

export default ScrollButton; // Exporting the ScrollButton component for use in other parts of the application
