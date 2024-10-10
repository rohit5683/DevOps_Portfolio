import React, { useState } from "react";
import "./MobileNav.css";
import { Link } from "react-scroll";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout, FcContacts } from "react-icons/fc";
import { CgWorkAlt } from "react-icons/cg";
import { GiHamburgerMenu, GiTechnoHeart } from "react-icons/gi";
import { PiStudentDuotone } from "react-icons/pi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  // handle menu
  const handleManuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <HiMenuAlt1
              onClick={handleOpen}
              className="mobile-nav-icon"
              size={30}
            />
          ) : (
            <GiHamburgerMenu
              onClick={handleOpen}
              className="mobile-nav-icon"
              size={30}
            />
          )}
          <span className="mobile-nav-title">My Portfolio</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="navbar">
              <div className="nav-items">
                <div className="nav-link">
                  <Link
                    to="home"
                    onClick={handleManuClick}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <AiOutlineHome size={20} />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    onClick={handleManuClick}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    onClick={handleManuClick}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <PiStudentDuotone />
                    Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="techstack"
                    onClick={handleManuClick}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <GiTechnoHeart />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="projects"
                    onClick={handleManuClick}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <AiOutlineFundProjectionScreen />
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work"
                    onClick={handleManuClick}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <CgWorkAlt />
                    Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    onClick={handleManuClick}
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcContacts />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
