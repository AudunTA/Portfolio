import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

function Header({ aboutClick, homeClick, portfolioClick, contactClick }) {
  const [showHamburger, setShowHamburger] = useState(false);

  const handleHamburgerClick = () => {
    setShowHamburger(!showHamburger);
  };
  return (
    <div className="header">
      <div className="flex-header">
        {showHamburger ? (
          <div className="mobile-nav">
            <a onClick={homeClick} className="nav-item-mobile">
              <p className="header-mono">01.</p>
              Home
            </a>
            <a onClick={aboutClick} className="nav-item-mobile">
              <p className="header-mono">02.</p>
              About
            </a>
            <a onClick={portfolioClick} className="nav-item-mobile">
              <p className="header-mono">03.</p>
              Projects
            </a>
            <a onClick={contactClick} className="nav-item-mobile">
              <p className="header-mono">04.</p>
              Contact
            </a>
          </div>
        ) : (
          ""
        )}
        <p className="logo-nav">Logo</p>

        <div className="header-nav">
          <a onClick={homeClick} className="nav-item">
            <p className="header-mono">01.</p>
            Home
          </a>
          <a onClick={aboutClick} className="nav-item">
            <p className="header-mono">02.</p>
            About
          </a>
          <a onClick={portfolioClick} className="nav-item">
            <p className="header-mono">03.</p>
            Projects
          </a>
          <a onClick={contactClick} className="nav-item">
            <p className="header-mono">04.</p>
            Contact
          </a>
        </div>
        <div className="hamburger-icon">
          <FontAwesomeIcon
            className="icon-hamburger"
            onClick={handleHamburgerClick}
            icon={faEllipsis}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
