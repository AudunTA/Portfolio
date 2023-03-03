import React from "react";
import "./Header.css";
function Header({ aboutClick, homeClick, portfolioClick }) {
  return (
    <div className="header">
      <div className="flex-header">
        <p>Logo</p>

        <div className="header-nav">
          <a onClick={homeClick} className="nav-item">
            <p className="header-mono">01</p>
            home
          </a>
          <a onClick={aboutClick} className="nav-item">
            <p className="header-mono">02</p>
            about
          </a>
          <a onClick={portfolioClick} className="nav-item">
            <p className="header-mono">03</p>
            projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
