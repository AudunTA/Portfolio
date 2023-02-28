import React from "react";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="wrapper-homepage">
      <div className="container-homePage">
        <div className="hompage-left-section">
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </div>
        <div className="homepage-middle-section">
          <p className="hello">Hi, my name is</p>
          <h2 className="name">Audun Thompson Anderssen</h2>
          <h2 className="front-end">Im a Front End Developer</h2>
          <p className="short-description">
            Im currently a front-end student at Noroff, Kristiansand. I also got
            a bachelor in It og Informasjonssystemer at USN Ringeriket.
          </p>
          <button>See my Work</button>
          <button className="btn_getInTouch">Get In Touch</button>
        </div>
        <div className="homepage-right-section">
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
