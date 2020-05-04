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
            <i id="skillLogos" className={item.icon}></i>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div id="skillsBreakdown" className="row">
        {skillsBreakdown.map((item, i) => (
          <div key={i} className="col">
            <h6>{item.title}</h6>
            <p>{item.description}</p>
            {item.items.map((skill, i) => (
              <span key={i} className="badge badge-secondary">
                {" "}
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
