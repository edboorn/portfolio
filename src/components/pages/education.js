import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

export default function education() {
  return (
    <div>
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateText="Sep 2015 - September 2018"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>University of East Anglia</h3>
          <h4>Computer Science Bsc</h4>
          <p>
            A full degree program granting my experience across multiple disiplines. That include:
          </p>
          <ul>
            <li>Traditional Programming Methodologies in Java, C, C++</li>
            <li>Front End Tech using Javascript, HTML, CSS and Python</li>
            <li>Creating hardware & writing the software for it using C and Assembly.</li>
            <li>Network management and profilling using a Raspberry Pi</li>
            <li>Human Computer Interaction knowledge</li>
            <li>Exposure to Internet law, in particular to Net Nutrality</li>
            <li>Creating and using Computer Algorithms whilsts also understanding how to asses the efficiency of code written.</li>
            <li>Command line/bash scripting</li>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="Sep 2014 - Sep 2015"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>University of East Anglia</h3>
          <h4>Computer Science Foundation Year</h4>
          <p>
              A University recommended foundation program to prepare me for the full degree. Studied items include : 
          </p>
          <ul>
            <li>Advanced math skills to a futher/higher level</li>
            <li>Introductions to Java</li>
            <li>Introductions to Computer Algorithms</li>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="Sep 2012 - Sep 2014"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>Hertford Regional College</h3>
          <h4>Software Development BTEC</h4>
          <p>
            A two year BTEC that focussed primarily on the princiles of Software Engineering and its applications to business
          </p>
          <ul>
            <li>Core Princiles of Software development</li>
            <li>Using OOP and Procedual Programming techniques</li>
            <li>Experience with building computers and how the hardware interacts with the system</li>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="2010 - 2012"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>Richard Hale School</h3>
          <h4>GCSEs</h4>
          <p>
            12 GCSE grades A*-D (ICT A*A, Maths B, English B)
          </p>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
