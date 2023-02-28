import React from "react";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
function HomePage(props) {
  let about = props.aboutClick;
  let home = props.homeClick;
  let portfolio = props.portfolioClick;
  return (
    <div className="wrapper-homepage">
      <div className="container-homePage">
        <div className="homepage-middle-section">
          <p className="hello">Hi, my name is</p>
          <h2 className="name">Audun Thompson Anderssen</h2>
          <h2 className="front-end">Im a Front End Developer</h2>
          <p className="short-description">
            Im currently a front-end student at Noroff, Kristiansand. I also got
            a bachelor in It og Informasjonssystemer at USN Ringeriket.
          </p>
          <button>SEE MY WORK</button>
          <button className="btn_getInTouch">GET IN TOUCH</button>
        </div>
        <div className="homepage-right-section">
          <div className="wrapper-sidenav">
            <div className="container-nav-left"></div>
            <div className="container-nav-right">
              <div className="icon-container">
                <div className="icon-box">
                  <FontAwesomeIcon className="sidenav-icon" icon={faHome} />
                  <a onClick={home}>
                    <h2 className="nav-name">Home</h2>
                  </a>
                </div>
                <div className="icon-box">
                  <FontAwesomeIcon className="sidenav-icon" icon={faUser} />
                  <a onClick={about}>
                    <h2 className="nav-name">About</h2>
                  </a>
                </div>
                <div className="icon-box">
                  <FontAwesomeIcon
                    className="sidenav-icon"
                    icon={faBriefcase}
                  />
                  <a onClick={portfolio}>
                    <h2 className="nav-name">Portfolio</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
