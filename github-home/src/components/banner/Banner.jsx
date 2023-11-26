import React from "react";
import "./banner.styles.scss";
import Strip1 from "../Strip/Strip";
import { IoIosArrowForward } from "react-icons/io";
import { FcRightDown } from "react-icons/fc";
import { PiBracketsAngleBold } from "react-icons/pi";
const Banner = () => {
  return (
    <div className="banner-section">
         <div className="blur">
           
        </div>
         <div className="angular-bracket">
            <PiBracketsAngleBold style={{color:"white", fontWeight:"bold" ,fontSize:"22px"}}/> 
        </div>
      <div className="banner-content">
       
        <div className="strip-container">
          <Strip1 />
         
        </div>

        <div className="banner-heading-container">
          <h1 className="banner-heading">Let’s build from here</h1>
          <p className="bannner-subheading">
            The world’s leading AI-powered developer platform.
          </p>
          <div className="btn-container">
            <input type="text" placeholder="Email address" />
            <button className="github-signup-btn">Sign up for GitHub</button>

            <button className="enterprise-btn">
              Start a free enterprise trail <IoIosArrowForward />
            </button>
          </div>
          <p className="organization-content">
            Trusted by the world’s leading organizations <FcRightDown/>
          </p>
          <div className="organization-logo">
            <img src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg" alt="" />
            <img src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg" alt="" />
            <img src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg" alt="" />
            <img src="https://github.githubassets.com/assets/sap-96248a56d312.svg" alt="" />
            <img src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg" alt="" />
            <img src="https://github.githubassets.com/assets/telus-df0c2109df99.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="banner-image"></div>
    </div>
  );
};

export default Banner;
