import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

export default function skills() {
  return (
    <div className="pageRoot">
      <Grid>
        <Grid container spacing={2}>
          <Grid item lg>
            <div className="skillSection" style={{ width: "500px" }}>
              <h2 className="skillSectionHeading">Technical</h2>
              <p className="skillsIntro">Through Education and Personal interest, I am constantly trying to improve my skills and keep up with current technology. Below is an overview of where I am currently at.</p>
              <div className="skillItem">
                <h4 className="skillHeading">Javascript</h4>
                <LinearProgress variant="determinate" value="70" />
              </div>
              <div className="skillItem">
                <h4 className="skillHeading">HTML</h4>
                <LinearProgress variant="determinate" value="85" />
              </div>
              <div className="skillItem">
                <h4 className="skillHeading">CSS</h4>
                <LinearProgress variant="determinate" value="85" />
              </div>
              <div className="skillItem">
                <h4 className="skillHeading">C++</h4>
                <LinearProgress variant="determinate" value="60" />
              </div>
              <div className="skillItem">
                <h4 className="skillHeading">Firebase</h4>
                <LinearProgress variant="determinate" value="80" />
              </div>
              <div className="skillItem">
                <h4 className="skillHeading">Amazon Web Services</h4>
                <LinearProgress variant="determinate" value="40" />
              </div>
              <div className="skillItem">
                <h4 className="skillHeading">Google Analytics</h4>
                <LinearProgress variant="determinate" value="85" />
              </div>
            </div>
          </Grid>
          <Grid item lg>
            <div className="skillSection" style={{ width: "500px" }}>
              <h2 className="skillSectionHeading">Product</h2>
              <p className="skillsIntro">As a product person by trade, I have been upskilled in a number of dicisples that allow me to product strong products with the teams I work in. </p>
              <div className="skillItem">
                <h4 className="skillHeading">Scrum Team Management</h4>
                <LinearProgress variant="determinate" value="90" />
              </div>
              <div className="skillItem">
                <h4 className="skillHeading">AGILE Priciples</h4>
                <LinearProgress variant="determinate" value="90" />
              </div>
              <div className="skillItem">
                <h4 className="skillHeading">Stakeholder management</h4>
                <LinearProgress variant="determinate" value="60" />
              </div>
              <div className="skillItem">
                <h4 className="skillHeading">Technical Planning</h4>
                <LinearProgress variant="determinate" value="95" />
              </div>
              <div className="skillItem">
                <h4 className="skillHeading">Product Communication</h4>
                <LinearProgress variant="determinate" value="75" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
