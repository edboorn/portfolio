import React from "react";
import { Router, Link } from "react-router-dom";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Navigation = () => (
  <Router history={history}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      {/* <a className="navbar-brand " href="/portfolio">
        Edward Boorn
      </a> */}

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
        <ul className="navbar-nav mx-auto">
          <li className="nav-item" to="/portfolio">
            <a
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/edboorn"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
          </li>
          <li className="nav-item" to="/portfolio/workExperience">
            <a
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/edboorn/"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </li>
          <li className="nav-item" to="/portfolio/education">
            <a
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ed_boorn"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
          </li>
          <li className="nav-item" to="/portfolio/skills">
            <a
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/edward-boorn/"
            >
              <i className ="fab fa-linkedin-in fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </Router>
);

export default Navigation;
