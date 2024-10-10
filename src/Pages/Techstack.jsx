import React from "react";
import "./Techstack.css";
import { TechstackList } from "../Utiles/TechstackList";
import RubberBand from "react-reveal/RubberBand";
// import Fade from "react-reveal/Fade";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <RubberBand>
          <h1>Technologies Stack</h1>
          <hr />
          <p className="text-center">
            👌 Including Programming Languages, Frameworks, Database, Front-end
            Back-end and API
          </p>
        </RubberBand>
        <div className="row">
          {TechstackList.map((tech) => (
            <Fade left>
              <div key={tech._id} className="col-md-4">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" size={35} />
                        </div>
                        <div className="media-body">
                          <h3 style={{ margin: "10px" }}>{tech.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
