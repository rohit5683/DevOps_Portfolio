import React from "react";
import "./About.css";
import Profile from "../../src/Assets/Images/Profile.png";
import { useSpring, animated } from "@react-spring/web"; // Import react-spring

const About = () => {
  // Define spring animation for the whole component
  const springStyle = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 600 }, // Adjust the duration as needed
  });

  return (
    <animated.div style={springStyle} className="about" id="about">
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image">
          <img src={Profile} alt="profile pic" />
        </div>
        <div className="col-md-6 about-content">
          <h1>About me</h1>
          <p>
            I am Rohit Vishwakarma, and I recently completed my post-graduation in Master of Computer Application from Doranda College. I have a deep interest in Web Development, having made three projects using HTML, CSS, JavaScript, and Node.js. I am also learning JavaScript libraries like React.js to build web applications. I completed six weeks of online training in React.js from Internshala, where I learned frontend development with RESTful APIs. During my MCA, with the help of YouTube, I worked on my project in the MERN stack. I believe I can be the best fit for this job because I am always curious to learn and explore new things. I love technical challenges that help me grow, and this is all about me.
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default About;
