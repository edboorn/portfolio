import React from "react";
import NavBar from "./components/layout/navBar";
import "./App.css";

// Page Fragment Imports
import AboutMe from "./components/pages/aboutMe";
import PersonalProjects from "./components/pages/personalProjects";
import Skills from './components/pages/skills';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-sm">
        <div className="homeItem">
          <AboutMe />
        </div>
        <div className="dropdown-divider"></div>
        <div className="homeItem">
          <PersonalProjects />
        </div>
        <div className="dropdown-divider"></div>
        <div className="homeItem">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
