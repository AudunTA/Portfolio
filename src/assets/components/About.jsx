import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faSass,
  faBootstrap,
  faPython,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

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
            <div className="icons-container">
              <div className="icon-divider">
                <FontAwesomeIcon className="icon-brands" icon={faReact} />
                <FontAwesomeIcon className="icon-brands" icon={faJs} />
                <FontAwesomeIcon className="icon-brands" icon={faHtml5} />
                <FontAwesomeIcon className="icon-brands" icon={faSass} />
                <FontAwesomeIcon className="icon-brands" icon={faBootstrap} />
              </div>
              <div className="icon-divider">
                <FontAwesomeIcon className="icon-brands" icon={faPython} />
                <FontAwesomeIcon className="icon-brands" icon={faJs} />
                <FontAwesomeIcon className="icon-brands" icon={faFigma} />
              </div>
            </div>
            <div className="border-box-bottom-left-skills"></div>
          </div>
          <div className="education-section">
            <div className="about-header">
              <div className="btn_content-about">
                <p>02. education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
