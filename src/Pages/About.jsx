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
            I am an MCA graduate and AWS Certified Cloud Practitioner with a strong foundation in cloud computing and AWS services. I have completed the 12-week AWS re/Start program at Tech Mahindra SMART Academy, where I gained comprehensive knowledge of cloud architecture, best practices, and hands-on experience with services like EC2, S3, IAM, VPC, and RDS. <br /> <br />

            I am passionate about leveraging cloud solutions to solve real-world problems and ensure optimal performance in cloud environments. Currently, I am expanding my skill set by diving into the world of DevOps through a course on Udemy, where I am learning tools like Docker, Jenkins, Ansible, and Kubernetes. I’m actively applying these skills in projects that involve deploying and managing infrastructure on the AWS platform. <br /> <br />

            With a blend of development experience, cloud expertise, and growing proficiency in DevOps, I am eager to contribute to innovative teams and tackle complex challenges in cloud-native environments. Let's connect and explore opportunities in cloud and DevOps!
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default About;
