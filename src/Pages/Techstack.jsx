import React from "react";
import "./Techstack.css";
import { TechstackList } from "../Utiles/TechstackList";
import { useSpring, animated } from "@react-spring/web"; // Import react-spring

const Techstack = () => {
  // Define the rubber band animation
  const rubberBand = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.1)" },
    config: { tension: 200, friction: 10 },
    reset: true,
    loop: { reverse: true },
  });

  // Define the fade-in animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <>
      <div className="container techstack" id="techstack">
        <animated.h1 style={rubberBand}>
          Technologies Stack
        </animated.h1>
        <hr />
        <p className="text-center">
          👌 Including Programming Languages, Frameworks, Database, Front-end
          Back-end and API
        </p>
        <div className="row">
          {TechstackList.map((tech) => (
            <animated.div style={fadeIn} key={tech._id} className="col-md-4">
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
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
