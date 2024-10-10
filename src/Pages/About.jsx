import React from "react";
import "./About.css";
import Profile from "../../src/Assets/Images/Profile.png";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <>
      <Zoom bottom>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image">
              <img src={Profile} alt="profile pic" />
            </div>
            <div className="col-md-6 about-content">
              <h1>About me</h1>
              <p>
                I am Rohit Vishwakarma recently I have completed my post
                graduation in Master of Computer Application from Doranda
                College. I have a deep intrested in Web Development in which I
                have made 3 projects using HTML, CSS, Javascript, NodeJs and
                also learning JavaScript Library like react js to build a web
                application. I have completed 6 weeks online training in Reactjs
                from Internshala in which I learn frontend development with
                Restful API. In MCA with the help of YouTube I have done my
                project in MERN Stack. So, I can say that I can be the best fit
                for this job because I am always curious to learn and explore
                new things. I love technical challenges that help me to grow and
                This is all about me.
              </p>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default About;
