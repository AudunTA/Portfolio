import { useRef, useState } from "react";
import "./App.css";
import HomePage from "./assets/components/HomePage";
import About from "./assets/components/About";
import Sidenav from "./assets/components/sidenav/Sidenav";
import Portfolio from "./assets/components/Portfolio";

function App() {
  const about = useRef();
  const home = useRef();
  const portfolio = useRef();

  const aboutClick = () => {
    about.current.scrollIntoView({ behavior: "smooth" });
  };
  const homeClick = () => {
    home.current.scrollIntoView({ behavior: "smooth" });
  };
  const portfolioClick = () => {
    portfolio.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Sidenav
        aboutClick={aboutClick}
        homeClick={homeClick}
        portfolioClick={portfolioClick}
      />
      <div ref={home} className="front-page">
        <HomePage
          aboutClick={aboutClick}
          homeClick={homeClick}
          portfolioClick={portfolioClick}
        />
      </div>
      <div ref={about} className="about-page">
        <About />
      </div>
      <div ref={portfolio} className="portfolio-page">
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
