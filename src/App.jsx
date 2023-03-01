import { useRef, useState } from "react";
import "./App.css";
import HomePage from "./assets/components/HomePage";
import About from "./assets/components/About";
import Sidenav from "./assets/components/sidenav/Sidenav";
import Portfolio from "./assets/components/Portfolio";
import { useEffect } from "react";
function App() {
  const [allProjects, setAllProjects] = useState([
    {
      title: "ReactoTech",
      date: "Feb 2023",
      description:
        "ReactoTech is an ecommerce store, that i built in react to strenghten my react skills. The application is connected to an API, and the user is able to sort, search, view product information, reviews and add to cart. Full description is under the github repository",
      tags: ["React", "JavaScript"],
      images: [
        {
          src: "src/assets/images/reactoTech.png",
          alt: "homepage: lightmode",
        },
      ],
    },
    {
      title: "Adventure Trails Hike",
      date: "Mar 2022",
      description:
        "This is Adventure Trails Hike, here i focues on writing better and clean HTML and CSS, and making components easy to globally change on all pages. slight use of JavaScript for the navigation",
      tags: ["HTML", "CSS", "JavaScript"],
      images: [
        {
          src: "src/assets/images/Adventure-Trails-Hike.png",
          alt: "homepage: lightmode",
        },
      ],
    },
    {
      title: "AuctionHouse",
      date: "Dec 2023",
      description:
        "AuctionHouse is my semesterproject for the 3rd semester at Noroff. This is an Auction website that has alot of interactive functionallity using APIs. (including posting, listing, user authentication etc)",
      achivements: "Graded B",
      tags: ["HTML", "BootStrap", "SASS", "JavaScript"],
      images: [
        {
          src: "src/assets/images/auctionHouse.png",
          alt: "homepage: lightmode",
        },
      ],
    },
    {
      title: "FrontFace",
      date: "Oct 2022",
      description:
        "I developed FrontFace, a social media platform, in collaboration with a classmate as a course assignment in JavaScript 2. The project was completed within a tight timeframe of one week.",
      tags: ["HTML", "BootStrap", "SASS", "JavaScript"],
    },
    {
      title: "PlantSpire",
      date: "May - June 2022",
      description:
        "This was my semester 2 project at Noroff. The focus of this project was JavaScript, including listing, filter, search and posting using an API.",
      achivements: "Graded B",
      tags: ["HTML", "BootStrap", "SASS", "JavaScript"],
    },
  ]);
  const [focusedProject, setFocusedProject] = useState(allProjects[0]);

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
  const clickProject = (ele) => {
    setFocusedProject(ele);
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
        <Portfolio
          currentProject={focusedProject}
          allProjects={allProjects}
          setProject={clickProject}
        />
      </div>
    </div>
  );
}

export default App;
