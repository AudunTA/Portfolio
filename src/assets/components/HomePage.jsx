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
          <p className="hello">hello! my name is</p>
          <h2 className="name">Audun Thompson Anderssen</h2>
          <h2 className="front-end">Im a Front End Developer</h2>
          <p className="short-description">
            Currently a front-end development student at Noroff,Kristiansand.
          </p>
        </div>
        <div className="homepage-right-section">
          <div className="wrapper-sidenav">
            <div className="container-nav-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
