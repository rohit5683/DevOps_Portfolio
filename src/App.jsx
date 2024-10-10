import React from "react";
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About";
import Techstack from "./Pages/Techstack";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import WorkExperience from "./Pages/WorkExperience";
import Contact from "./Pages/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import MobileNav from "./Components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExperience />
        <Contact />
        <div
          className="footer pb-2 ms-3"
          style={{ backgroundColor: "#138781", padding: "5px", color: "white" }}
        >
          <h4 className="text-center">Made with ❤ Rohit &copy; 2023</h4>
        </div>
      </div>
      <ScrollToTop smooth style={{ backgroundColor: "greenyellow" }} />
    </>
  );
}

export default App;
