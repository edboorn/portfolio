import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

export default function education() {
  return (
    <div className="pageRoot">
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateText="11/2010 – Present"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>University of East Anglia</h3>
          <h4>Computer Science Bsc</h4>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="11/2010 – Present"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>University of East Anglia</h3>
          <h4>Computer Science Foundation Year</h4>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="11/2010 – Present"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>Hertford Regional College</h3>
          <h4>Software Development BTEC</h4>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="11/2010 – Present"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>Richard Hale School</h3>
          <h4>AS Levels</h4>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
