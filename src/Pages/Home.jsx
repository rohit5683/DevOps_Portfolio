import React from "react";
import { useTheme } from "../Context/ThemeContext";
import "../Pages/home.css";
import Typewriter from "typewriter-effect";
import Cv from "../Assets/Docs/Rohit Vishwakarma.pdf";
import DevImage from "../../src/Assets/Images/Home.png";
import { CiLight, CiDark } from "react-icons/ci";
import { useSpring, animated } from "@react-spring/web"; // Import react-spring

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Handle Theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  // Define the zoom-like animation
  const zoomAnimation = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
  });

  // Define the bounce-like animation
  const bounceAnimation = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
    config: { tension: 170, friction: 12 },
  });

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <CiDark size={30} /> : <CiLight size={30} />}
        </div>
        <div className="container home-content">
          <animated.div style={zoomAnimation}>
            <h1>
              Hi, I am a
              <Typewriter
                options={{
                  strings: [
                    "DevOps Engineer",
                    "AWS Certified Cloud Practitioner",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </h1>
          </animated.div>

          <animated.div style={bounceAnimation}>
            <img src={DevImage} alt="" />

            <div className="home-button">
              <a
                className="btn btn-hire"
                href="http://wa.me/+918969989233"
                rel="noreferrer"
                target="blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href={Cv}
                download="Rohit_Vishwakarma.pdf"
              >
                My Resume
              </a>
            </div>
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Home;
