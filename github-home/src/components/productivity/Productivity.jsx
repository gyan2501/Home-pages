import React from "react";
import "./productivity.styles.scss";
import { GoBriefcase } from "react-icons/go";

import { IoIosArrowForward } from "react-icons/io";
const Productivity = () => {
  return (
    <div className="productivity-section">
      <div className="blur"></div>
      <div className="briefcase">
        <GoBriefcase
          style={{ color: "white", fontWeight: "bold", fontSize: "22px" }}
        />
      </div>
      <div className="productivity-container">
        <h3>Productivity</h3>
        <h1 className="green-inn">Accelerate innovation</h1>
        <h1 className="ai">
          Our AI-powered platform increases the pace of software development.
        </h1>
        <img
          className="ss"
          src="https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png"
          alt=""
        />
        <p className="github-copilot">
          {" "}
          <span>GitHub Copilot</span> empowers developers to complete tasks 55%
          faster with contextualized AI coding assistance across workflows.
        </p>
        <p className="explore">
          Explore GitHub Copilot{" "}
          <IoIosArrowForward style={{ marginBottom: "-3px" }} />
        </p>

        <img
          className="curve-line-green"
          src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg"
          alt=""
        />
        <div className="did-you-know">
          <button className="did-you-know-btn">Did you know?</button>
          <p className="green-22">22% increase</p>
          <p className="developer-prod">in developer productivity after three <br/> years with GitHub</p>
          <p className="explore">
            {" "}
            Read the report{" "}
            <IoIosArrowForward style={{ marginBottom: "-3px" }} />
          </p>
        </div>
        <img className="github-table" src="https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=1498&format=webpll" alt="" />
      
      </div>
      <div className="globe-img">
        <img src="../../asset/asset39.png" alt="" />
      </div>
    </div>
  );
};

export default Productivity;
