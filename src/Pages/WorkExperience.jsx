import React from "react";
import "./WorkExperience.css";
import { FaSchool } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  return (
    <>
      <div className="container workexp" id="work">
        <h1>Work Experience</h1>
        <hr />
        <VerticalTimeline lineColor="#138781">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#ffffff",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 12px",
              color: "#000000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="12 Week"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              AWS Re/Start Trainee 
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Tech Mahindra SMART Academy
            </h5>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#ffffff",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 12px",
              color: "#000000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="6 Week"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              ReactJs Online Training
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Internshaala
            </h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkExperience;
