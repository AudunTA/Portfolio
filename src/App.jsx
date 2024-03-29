import { useRef, useState } from "react";
import "./App.css";
import HomePage from "./assets/components/HomePage";
import About from "./assets/components/About";
import Sidenav from "./assets/components/sidenav/Sidenav";
import Portfolio from "./assets/components/Portfolio";
import Contact from "./assets/components/contact/Contact";
import { useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Header from "./assets/components/header/Header";
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
          src: "images/reactoTech.png",
          alt: "homepage: mobile",
        },
      ],
      live_link: "https://audunta.github.io/ReactoTech/",
      gitHub: "https://github.com/AudunTA/ReactoTech",
    },
    {
      title: "Adventure Trails Hike",
      date: "Mar 2022",
      description:
        "This is Adventure Trails Hike, here i focues on writing better and clean HTML and CSS, and making components easy to globally change on all pages. slight use of JavaScript for the navigation",
      tags: ["HTML", "CSS", "JavaScript"],
      images: [
        {
          src: "images/Adventure-Trails-Hike.png",
          alt: "homepage: lightmode",
        },
      ],
      live_link: "https://admirable-parfait-746c8d.netlify.app",
      gitHub: "https://github.com/AudunTA/ATH",
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
          src: "images/auctionHouse.png",
          alt: "auction house displayed picture",
        },
      ],
      live_link: "https://audunta.github.io/SemesterAssignment_Auctionhouse/",
      gitHub: "https://github.com/AudunTA/SemesterAssignment_Auctionhouse",
    },
    {
      title: "FrontFace",
      date: "Oct 2022",
      description:
        "I developed FrontFace, a social media platform, in collaboration with a classmate as a course assignment in JavaScript 2. The project was completed within a tight timeframe of one week.",
      tags: ["HTML", "BootStrap", "SASS", "JavaScript"],
      images: [
        {
          src: "images/FrontFace.png",
        },
      ],
      live_link: "#",
      gitHub: "https://github.com/AudunTA/FrontFace",
    },
    {
      title: "PlantSpire",
      date: "May - June 2022",
      description:
        "This was my semester 2 project at Noroff. The focus of this project was JavaScript, including listing, filter, search and posting using an API. For the API i used wordpress as a headless CMS. The API no longer work as its not hosted anymore.",
      achivements: "Graded B",
      tags: ["HTML", "BootStrap", "SASS", "JavaScript"],
      images: [
        {
          src: "images/plantSpire.png",
        },
      ],
      live_link: "https://unrivaled-mooncake-14dedc.netlify.app",
      gitHub: "https://github.com/AudunTA/SemesterAssignment_Auctionhouse",
    },
  ]);
  const [focusedProject, setFocusedProject] = useState(allProjects[0]);

  const about = useRef();
  const home = useRef();
  const portfolio = useRef();
  const contact = useRef();

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
  const contactClick = () => {
    contact.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Header
        aboutClick={aboutClick}
        homeClick={homeClick}
        portfolioClick={portfolioClick}
        contactClick={contactClick}
      />
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
      <div ref={contact}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
