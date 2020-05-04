import React from "react";

// Data Import
import { mainSkills, skillsBreakdown } from "../../data/skills";

export default function skills() {
  return (
    <React.Fragment>
      <div className="row" id="sectionHeading">
        <div className="col">
          <h4> Skills </h4>
        </div>
      </div>
      <div id="mainSkills" className="row">
        {mainSkills.map((item, i) => (
          <div key={i} className="col">
            {" "}
            {item.title}
          </div>
        ))}
      </div>

      <div id="skillsBreakdown" className="row">
        {skillsBreakdown.map((item, i) => (
          <div key={i} className="col">
            <h4>{item.title}</h4>
            {item.items.map((skill, i) => (
              <div key={i}>
                <span className="badge badge-secondary">
                  {skill}
                </span>{" "}
              </div>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
