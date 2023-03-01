import React from "react";
import "./Portfolio.css";
import { useState } from "react";
import "animate.css/animate.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio(props) {
  let allProjects = props.allProjects;
  let project = props.currentProject;
  let setProject = props.setProject;
  let count = 0;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [project, allProjects]);

  return (
    <div className="container-portfolio">
      <div className="container-portfolio-work">
        <div className="top-bar" data-aos="fade-right" data-aos-duration="500">
          <div className="border-div-top"></div>
          <h2>My projects</h2>
          <div className="border-div"></div>
        </div>
        <div className="container-under-content">
          <div
            className="container-portfolio-nav"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            {allProjects.map((ele) => {
              {
                count++;
              }

              return (
                <div
                  key={ele.title}
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
          </div>

          <div
            className="portfolio-description-container"
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-offset="0"
            key={project.title}
          >
            <h2 className="portfolio-title">{project.title}</h2>
            <p className="date">{project.date}</p>
            <div className="flex-portfolio">
              <p className="triangle-icon">▹</p>

              <p key={project.description} className="portfolio-description">
                {project.description}
              </p>
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
                return (
                  <p key={ele[0]} className="portfolio-tags">
                    {ele}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        {project.images ? (
          <>
            <div
              key={project.title + 2}
              className="border-box-bottom-left"
              data-aos="fade-up-right"
              data-aos-duration="300"
            ></div>
            <div
              key={project.title + 1}
              className="border-box-top-right"
              data-aos="fade-down-left"
              data-aos-duration="300"
            ></div>
            {project.images.map((ele) => {
              return (
                <img
                  key={ele.src}
                  src={ele.src}
                  className="portfolio-img"
                  data-aos="fade-up"
                  data-aos-duration="300"
                ></img>
              );
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
