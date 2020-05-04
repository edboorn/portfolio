import React from "react";
import { projects } from "../../data/projects";
export default function PersonalProjects() {
  return (
    <React.Fragment>
      <div className="row" id="sectionHeading" >
        <div className="col" >
          <h4> Personal Projects & Things I'm learning </h4>
        </div>
      </div>
      <div className="row">
        {projects.map((item, i) => (
          <div  key={i} className="col">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h4 className="card-title"> {item.title}</h4>
                <h5 className="card-subtitle mb-2 text-muted">
                  {item.techUsed}
                </h5>
                <div className="card-text">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
