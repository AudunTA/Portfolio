import React from "react";
import "./Portfolio.css";
function Portfolio() {
  return (
    <div className="container-portfolio">
      <div className="header-container">
        <h1>My Projects</h1>
      </div>
      <div className="container-portfolio-work">
        <div className="top-bar">
          <p>01.</p>
          <h2>ReactoTech</h2>
          <div className="border-div"></div>
        </div>
        <div className="container-under-content">
          <div className="container-portfolio-nav">
            <div className="btn_portfolio btn_active">
              <div className="btn_content">
                <p>01. ReactoTech</p>
              </div>
            </div>

            <div className="btn_portfolio">
              <div className="btn_content">
                <p>02. Adventure Trails Hike</p>
              </div>
            </div>
            <div className="btn_portfolio">
              <div className="btn_content">
                <p>03. AuctionHouse</p>
              </div>
            </div>
            <div className="btn_portfolio">
              <div className="btn_content">
                <p>04. PlantSpire</p>
              </div>
            </div>
            <div className="btn_portfolio">
              <div className="btn_content">
                <p>05. FrontFace</p>
              </div>
            </div>
            <div className="btn_portfolio">
              <div className="btn_content">
                <p>06. Adventure Hike (Old)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
