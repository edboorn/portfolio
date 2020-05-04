import React from "react";
import "./App.css";
import Fade from "react-reveal/Fade";

// Layout Imports
import NavBar from "./components/layout/navBar";
import Footer from "./components/layout/footer";
// Page Fragment Imports
import AboutMe from "./components/pages/aboutMe";
import PersonalProjects from "./components/pages/personalProjects";
import Skills from "./components/pages/skills";
import WorkExperience from "./components/pages/workExperience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-sm">
        <div className="homeItem">
          <Fade left>
            <AboutMe />
          </Fade>
        </div>
        <div className="dropdown-divider"></div>
        <div className="homeItem">
          <Fade right>
            <Skills />
          </Fade>
        </div>
        <div className="dropdown-divider"></div>
        <div className="homeItem">
          <Fade left>
            <PersonalProjects />
          </Fade>
        </div>

        <div className="dropdown-divider"></div>
        <div className="homeItem">
          <Fade right>
            <WorkExperience />
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
