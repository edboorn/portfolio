import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";



export default function skills() {
  return (
    <div className="pageRoot">
      <div className="skillSection" style={{width : "500px"}}>
        <h2 className="skillSectionHeading">Technical</h2>
        <div className="skillItem">
          <h4 className="skillHeading">Javascript</h4>
          <LinearProgress variant="determinate" value="60" />
        </div>
        <div className="skillItem">
          <h4 className="skillHeading">HTML</h4>
          <LinearProgress variant="determinate" value="60" />
        </div>
        <div className="skillItem">
          <h4 className="skillHeading">CSS</h4>
          <LinearProgress variant="determinate" value="60" />
        </div>
        <div className="skillItem">
          <h4 className="skillHeading">C++</h4>
          <LinearProgress variant="determinate" value="60" />
        </div>
      </div>
      <div className="skillSection">
        <h2 className="skillSectionHeading">Product</h2>
        <div className="skillItem">
          <h4 className="skillHeading">AGILE Priciples</h4>
          <LinearProgress variant="determinate" value="60" />
        </div>
        <div className="skillItem">
          <h4 className="skillHeading">Stakeholder management</h4>
          <LinearProgress variant="determinate" value="60" />
        </div>
        <div className="skillItem">
          <h4 className="skillHeading">Technical Planning</h4>
          <LinearProgress variant="determinate" value="60" />
        </div>
        <div className="skillItem">
          <h4 className="skillHeading">Product Communication</h4>
          <LinearProgress variant="determinate" value="60" />
        </div>
      </div>
    </div>
  );
}
