import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__left}>
        <h1 className={styles.banner__left_heading}>Data-powered solutions for Industrial Excellence</h1>
        <button className={styles.banner__left_btn}>Read More</button>
      </div>
      <div className={styles.banner__right}>
        <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
