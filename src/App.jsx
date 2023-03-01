import { useRef, useState } from "react";
import "./App.css";
import HomePage from "./assets/components/HomePage";
import About from "./assets/components/About";
import Sidenav from "./assets/components/sidenav/Sidenav";
import Portfolio from "./assets/components/Portfolio";

function App() {
  const [focusedProject, setFocusedProject] = useState({
    title: "ReactoTech",
    date: "Feb 2023",
    description:
      "ReactoTech is an ecommerce store, that i built in react to strenghten my react skills. The application is connected to an API, and the user is able to sort, search, view product information, reviews and add to cart. Full description is under the github repository",
    tags: ["React", "JavaScript"],
  });
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
        <Portfolio currentProject={focusedProject} />
      </div>
    </div>
  );
}

export default App;
