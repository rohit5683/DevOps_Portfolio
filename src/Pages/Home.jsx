import React from "react";
import { useTheme } from "../Context/ThemeContext";
import "../Pages/home.css";
import Typewriter from "typewriter-effect";
import Cv from "../Assets/Docs/Rohit Vishwakarma.pdf";
import DevImage from "../../src/Assets/Images/Home.png";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

const Home = () => {
  const [theme, setTheme] = useTheme();

  //Handle Theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <CiDark size={30} /> : <CiLight size={30} />}
        </div>
        <div className="container home-content">
          <Zoom right>
            <h1>
              Hi, I'am a
              <Typewriter
                options={{
                  strings: [
                    "React Developer!",
                    "Full Stack Developer!",
                    "MERN Stack Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </h1>
          </Zoom>
          <Bounce right>
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
          </Bounce>
        </div>
      </div>
    </>
  );
};

export default Home;
