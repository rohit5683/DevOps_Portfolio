import React from "react";
import "./Education.css";
import { FaSchool } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="container education" id="education">
        <h1>Education Qualification</h1>
        <VerticalTimeline lineColor="#138781">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#ffffff",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 12px",
              color: "#000000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Master of Computer Application
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ranchi, Jharkhand
            </h4>
            <p>Doranda College, Doranda, Ranchi</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#ffffff",
              color: "#000000",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 12px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2017 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Computer Application
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ranchi, Jharkhand
            </h4>
            <p>Doranda College, Doranda, Ranchi</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
