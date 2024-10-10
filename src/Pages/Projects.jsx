import "./Projects.css";
import project_1 from "../../src/Assets/Images/Project_1.png";
import project_2 from "../../src/Assets/Images/Project_2.png";
import project_3 from "../../src/Assets/Images/Project_3.png";
import Fade from "react-reveal/Fade";

import React from "react";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h1>Top Recent Projects</h1>
        <hr />
        <p>Here are my top 3 Recent Project with Live links and Source Code</p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <Fade left>
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge"> Full Stack </span>
                  <img src={project_1} alt="Project1" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-details-badge">MongoDB</span>
                  <span className="card-details-badge">Express</span>
                  <span className="card-details-badge">React</span>
                  <span className="card-details-badge">Node</span>
                </div>
                <div className="card-body m-auto">
                  <div className="ad-title">
                    <h5>Easykart Shopping Website</h5>
                  </div>
                  <a href="http://" className="ad-btn">
                    View
                  </a>
                  <a
                    href="https://github.com/rohit5683/Easykart"
                    className="ad-btn"
                    target="blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-md-4">
            <Fade left>
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge"> Web App </span>
                  <img src={project_2} alt="Project2" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-details-badge">React</span>
                  <span className="card-details-badge">Rest API</span>
                  <span className="card-details-badge">Node</span>
                </div>
                <div className="card-body m-auto">
                  <div className="ad-title">
                    <h5>Box Office App</h5>
                  </div>
                  <a
                    href="https://rohit5683.github.io/box-office-app/"
                    className="ad-btn"
                    target="blank"
                  >
                    View
                  </a>
                  <a
                    href="https://github.com/rohit5683/box-office-app"
                    className="ad-btn"
                    target="blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-md-4">
            <Fade left>
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge"> Web Site </span>
                  <img src={project_3} alt="Project3" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-details-badge">React</span>
                  <span className="card-details-badge">Chakra UI</span>
                  <span className="card-details-badge">Node</span>
                </div>
                <div className="card-body m-auto">
                  <div className="ad-title">
                    <h5>Video Hub</h5>
                  </div>
                  <a href="http://" className="ad-btn">
                    View
                  </a>
                  <a
                    href="https://github.com/rohit5683/techstar.github.org"
                    className="ad-btn"
                    target="blank"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
