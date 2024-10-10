import React from "react";
import "./Menu.css";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout, FcContacts } from "react-icons/fc";
import { CgWorkAlt } from "react-icons/cg";
import { GiTechnoHeart } from "react-icons/gi";
import { PiStudentDuotone } from "react-icons/pi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Profile from "../../Assets/Images/Profile.png";
import { Link } from "react-scroll";
import { useSpring, animated } from "@react-spring/web"; // Import react-spring

const Menu = ({ toggle }) => {
  // Define spring animations for profile and navbar
  const profileSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: toggle ? 1 : 0, transform: toggle ? 'translateY(0)' : 'translateY(-20px)' },
    config: { duration: 500 },
  });

  const navbarSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: toggle ? 1 : 0, transform: toggle ? 'translateY(0)' : 'translateY(-20px)' },
    config: { duration: 500 },
  });

  return (
    <>
      {toggle ? (
        <>
          <animated.div style={profileSpring} className="navbar-profile-pic">
            <img src={Profile} alt="profile pic" />
          </animated.div>
          <animated.div style={navbarSpring} className="navbar">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" spy={true} offset={-100} duration={100}>
                  <AiOutlineHome size={20} />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link to="about" spy={true} offset={-100} duration={100}>
                  <FcAbout />
                  About
                </Link>
              </div>
              <div className="nav-link">
                <Link to="education" spy={true} offset={-100} duration={100}>
                  <PiStudentDuotone />
                  Education
                </Link>
              </div>
              <div className="nav-link">
                <Link to="techstack" spy={true} offset={-100} duration={100}>
                  <GiTechnoHeart />
                  Tech Stack
                </Link>
              </div>

              <div className="nav-link">
                <Link to="projects" spy={true} offset={-100} duration={100}>
                  <AiOutlineFundProjectionScreen />
                  Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link to="work" spy={true} offset={-100} duration={100}>
                  <CgWorkAlt />
                  Work Experience
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contact" spy={true} offset={-100} duration={100}>
                  <FcContacts />
                  Contact
                </Link>
              </div>
            </div>
          </animated.div>
        </>
      ) : (
        <>
          <div className="navbar">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" spy={true} offset={-100} duration={100}>
                  <AiOutlineHome size={30} />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="about" spy={true} offset={-100} duration={100}>
                  <FcAbout size={30} />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="education" spy={true} offset={-100} duration={100}>
                  <PiStudentDuotone size={30} />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="techstack" spy={true} offset={-100} duration={100}>
                  <GiTechnoHeart size={30} />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="projects" spy={true} offset={-100} duration={100}>
                  <AiOutlineFundProjectionScreen size={30} />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="work" spy={true} offset={-100} duration={100}>
                  <CgWorkAlt size={30} />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contact" spy={true} offset={-100} duration={100}>
                  <FcContacts size={30} />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
