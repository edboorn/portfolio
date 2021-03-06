import React from "react";
import { projects } from "../../data/projects";
export default function PersonalProjects() {
  return (
    <React.Fragment>
      <div className="row" id="sectionHeading">
        <div className="col">
          <h4> What I'm currently working on </h4>
        </div>
      </div>
      <div className="row">
        {projects.map((item, i) => (
          <div key={i} className="col">
            <div id="projectItem" className="card mb-4 shadow-sm">
              <div className="card-body">
                <h4 className="card-title"> {item.title}</h4>
                <div className="card-subtitle mb-2 text-muted">
                  {item.techUsed.map((item, i) => (
                    <span key={i} className="badge badge-secondary">
                      {item}{" "}
                    </span>
                  ))}
                </div>
                <div className="card-text">
                  {" "}
                  <p>{item.description}</p>
                </div>
              </div>
              <a
                href={item.projectsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Take a look!
              </a>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
