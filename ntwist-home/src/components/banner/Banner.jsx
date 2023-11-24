
// Import the React library to work with React components
import React from "react";

// Import styles from a separate CSS module named "Banner.module.css"
import styles from "./Banner.module.css";

// Define a functional component called Banner
const Banner = () => {
  return (
    // Create a main div with a class name defined by styles.banner
    <div className={styles.banner}>
      {/* Left section of the banner */}
      <div className={styles.banner__left}>
        {/* Heading inside the left section */}
        <h1 className={styles.banner__left_heading}>Data-powered solutions for Industrial Excellence</h1>
        {/* Button inside the left section */}
        <button className={styles.banner__left_btn}>Read More</button>
      </div>
      
      {/* Right section of the banner */}
      <div className={styles.banner__right}>
        {/* Image inside the right section */}
        <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
      </div>
    </div>
  );
};

// Export the Banner component to be used in other parts of the application
export default Banner;
