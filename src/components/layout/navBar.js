import React from "react";
import { Router,Link } from "react-router-dom";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Navigation = () => (
  <Router history={history}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/portfolio">
        {/* <img alt="This is me " src={me} className="d-inline-block align-top" width="40" height="40"/> */}
          Edward Boorn
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <Link className="nav-item" to="/portfolio">
            <li className="nav-link" >About Me</li>
          </Link>
          <Link className="nav-item" to="/portfolio/workExperience">
            <li className="nav-link" >Job History</li>
          </Link>
          <Link className="nav-item"to="/portfolio/education">
            <li className="nav-link" >Education</li>
          </Link>
          <Link className="nav-item" to="/portfolio/skills">
            <li className="nav-link" >Skills</li>
          </Link>
          <Link className="nav-item" to="/portfolio/personalProjects">
            <li className="nav-link" >Personal Projects</li>
          </Link>
        </ul>
      </div>
    </nav>

    {/* <div className="socials">
      <div className="socialItem">
        <a
          className="socialItemLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/edboorn"
        >
          <p> Github</p>
        </a>
      </div>
      <div className="socialItem">
        <a
          className="socialItemLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/edboorn/"
        >
          <p>Instagram</p>
        </a>
      </div>
      <div className="socialItem">
        <a
          className="socialItemLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/ed_boorn"
        >
          <p> Twitter</p>
        </a>
      </div>
      <div className="socialItem">
        <a
          className="socialItemLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/edward-boorn/"
        >
          <p> LinkedIn</p>
        </a>
      </div>
    </div> */}
  </Router>
);

export default Navigation;
