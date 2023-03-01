import React from "react";
import "./About.css";
function About() {
  return (
    <div className="container-About">
      <div className="container-portfolio">
        <div className="container-portfolio-work">
          <div className="top-bar">
            <div className="border-div-left"></div>
            <h2>About me</h2>
            <div className="border-div-about-right"></div>
          </div>
          <div className="skills-section">
            <div className="about-header">
              <div className="btn_content-about">
                <p>01. Skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
