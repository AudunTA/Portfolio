import React from "react";
import "./Portfolio.css";
import { useState } from "react";
import Tags from "./Tags";
function Portfolio(props) {
  let allProjects = props.allProjects;
  let project = props.currentProject;
  let setProject = props.setProject;
  let count = 0;
  let additionalCount = 0;
  let btn_class = "btn_portfolio";
  const [additionalImg, setAdditionalImg] = useState([]);
  return (
    <div className="container-portfolio">
      <div className="container-portfolio-work">
        <div className="top-bar">
          <div className="border-div-top"></div>
          <h2>My projects</h2>
          <div className="border-div"></div>
        </div>
        <div className="container-under-content">
          <div className="container-portfolio-nav">
            {allProjects.map((ele) => {
              {
                count++;
              }

              return (
                <div
                  onClick={() => setProject(ele)}
                  className={
                    ele.title === project.title
                      ? "btn_portfolio btn_active"
                      : "btn_portfolio"
                  }
                >
                  <div className="btn_content">
                    <p>
                      0{count} {ele.title}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="btn_portfolio">
              <div className="btn_content">
                <p>06. Adventure Hike (Old)</p>
              </div>
            </div>
          </div>
          <div className="portfolio-description-container">
            <h2 className="portfolio-title">{project.title}</h2>
            <p className="date">{project.date}</p>
            <div className="flex-portfolio">
              <p className="triangle-icon">▹</p>
              <p className="portfolio-description">{project.description}</p>
            </div>
            {project.achivements ? (
              <div className="flex-portfolio">
                <p className="triangle-icon">▹</p>{" "}
                <p className="portfolio-description">
                  Achivements: {project.achivements}
                </p>{" "}
              </div>
            ) : (
              ""
            )}
            <div className="flex-portfolio">
              <p className="triangle-icon">▹</p>
              {project.tags.map((ele) => {
                return <p className="portfolio-tags">{ele}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        {project.images ? (
          <>
            <div className="border-box-bottom-left"></div>
            <div className="border-box-top-right"></div>
            {project.images.map((ele) => {
              return <img src={ele.src} className="portfolio-img"></img>;
            })}
          </>
        ) : (
          "fail"
        )}
      </div>
    </div>
  );
}

export default Portfolio;
