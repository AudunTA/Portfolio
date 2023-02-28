import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "./Sidenav.css";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
function Sidenav(props) {
  let about = props.aboutClick;
  let home = props.homeClick;
  return (
    <div>
      <div className="wrapper-sidenav">
        <div className="container-nav-left">
          <div className="icon-container">
            <FontAwesomeIcon className="sidenav-icon" icon={faGithubAlt} />
            <FontAwesomeIcon className="sidenav-icon" icon={faLinkedinIn} />
            <FontAwesomeIcon className="sidenav-icon" icon={faUser} />
          </div>
        </div>
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
              <FontAwesomeIcon className="sidenav-icon" icon={faBriefcase} />
              <a href="#">
                <h2 className="nav-name">Portfolio</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
