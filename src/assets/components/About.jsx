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
      <div className="wrapper-container">
        <div className="container-portfolio-work">
          <div className="margin-wrapper">
            <div
              className="top-bar"
              data-aos="fade-right"
              data-aos-duration="300"
              data-aos-offset="100"
            >
              <div className="border-div-left"></div>
              <h2>About me</h2>
              <div className="border-div-about-right"></div>
            </div>
            <div className="information-section">
              <div
                className="container-information"
                data-aos="fade-left"
                data-aos-duration="300"
              >
                <div className="information-header">
                  <div className="btn_content-about">
                    <p>01. information</p>
                  </div>
                </div>
                <div className="flex-education">
                  <p className="triangle-icon">▹</p>
                  <p className="information-text-one">
                    Hello! my name is Audun, im 25 years old and looking for a
                    job in primarly Front End. I live in Kristiansand, but im
                    not ruling out moving to start my career! I have strong
                    fundamentals in programming, and currently working on
                    getting better at React.
                  </p>
                </div>
                <div className="flex-education">
                  <p className="triangle-icon-margin-top">▹</p>
                  <p className="information-text-two">
                    In my spare time I enjoy working out and hanging out with my
                    friends & enjoy some nice food.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="skills-section"
              data-aos="fade-right"
              data-aos-duration="300"
              data-aos-offset="100"
            >
              <div className="about-header">
                <div className="btn_content-about">
                  <p>skills</p>
                </div>
              </div>
              <div className="icons-container">
                <div className="icon-divider">
                  <div className="icon-skills-box">
                    <FontAwesomeIcon className="icon-brands" icon={faReact} />
                    <div className="icon-skills-box-content">
                      <p>React</p>
                    </div>
                  </div>
                  <div className="icon-skills-box">
                    <FontAwesomeIcon className="icon-brands" icon={faJs} />
                    <div className="icon-skills-box-content">
                      <p>JavaScript</p>
                    </div>
                  </div>
                  <div className="icon-skills-box">
                    <FontAwesomeIcon className="icon-brands" icon={faHtml5} />
                    <div className="icon-skills-box-content">
                      <p>HTML</p>
                    </div>
                  </div>
                  <div className="icon-skills-box">
                    <FontAwesomeIcon className="icon-brands" icon={faSass} />
                    <div className="icon-skills-box-content">
                      <p>SASS</p>
                    </div>
                  </div>
                  <div className="icon-skills-box">
                    <FontAwesomeIcon
                      className="icon-brands"
                      icon={faBootstrap}
                    />
                    <div className="icon-skills-box-content">
                      <p>BootStrap</p>
                    </div>
                  </div>
                  <div className="icon-skills-box">
                    <FontAwesomeIcon className="icon-brands" icon={faPython} />
                    <div className="icon-skills-box-content">
                      <p>Python</p>
                    </div>
                  </div>
                  <div className="icon-skills-box">
                    <FontAwesomeIcon className="icon-brands" icon={faFigma} />
                    <div className="icon-skills-box-content">
                      <p>Figma</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-box-bottom-left-skills"></div>
            </div>
            <div
              className="education-section"
              data-aos="fade-left"
              data-aos-duration="300"
              data-aos-offset="100"
            >
              <div className="container-education">
                <div className="education-header">
                  <div className="btn_content-about">
                    <p>03. education</p>
                  </div>
                </div>
                <div className="flex-education">
                  <p className="triangle-icon">▹</p>
                  <p className="education-text">
                    Higher Professional Degree Front-end Development at Noroff,
                    Kristiansand.
                  </p>
                </div>
                <div className="flex-education">
                  <p className="triangle-icon-margin-top">▹</p>
                  <p className="education-text-two">
                    Bachelor Degree IT og Informasjonsystemer at USN, Ringeriket
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
