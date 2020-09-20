import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

export default function workExperience() {
  return (
    <React.Fragment>
      <div className="row" id="sectionHeading">
        <div className="col">
          <h4> Employment History</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Timeline lineColor={"#ddd"}>
          <TimelineItem
              key="001"              dateText="Sep 2020 - Current"
              dateInnerStyle={{ background: "#dddddd", color: "#000" }}
            >
              <h3>Studio Graphene</h3>
              <h4>Digital Product Manager</h4>
              <br></br>
              <p> <i>Info Coming soon!</i></p>
            </TimelineItem>
            <TimelineItem
              key="001"
              dateText="Sep 2018 – Sep 2020"
              dateInnerStyle={{ background: "#dddddd", color: "#000" }}
            >
              <h3>PepperHQ</h3>
              <h4>Product Analyst</h4>
              <br></br>
              <p>
                Working as part of the product team I had been involved in the
                inital vision, creation and delivery of multiple key products
                through my time at Pepper so far. I also had exposure in
                working and dealing with senior stakeholders in multiple
                businesses.
              </p>
              <p>
                I had been able to bridge my techincal knowlege and good eye for
                product delivery in a variety of mission critical products. One
                such product includes being the primary on a brand new Customer
                Portal and self-signup mechanism that is critical for business
                growth going forward
              </p>
              <p>
                <br></br>
                Responsibilities Included - 
                <ul>
                <li>Managing product development and delivery.</li>
                <li>Working with and supporting the development,QA and Design teams.</li>
                <li>Actively working With QA/QC to improve the reliability and quality of the products being developed</li>
                <li>Producing wireframes and prototypes in Sketch</li>
                <li>Producing clear user stories that include acceptance criteria</li>
                <li>Running sprint ceremonies including standups, planning, reviews and retrospectives</li>
                <li>Responsible for creation and management of the product roadmap.</li>
                <li>Sprint Management using Jira</li>
                <li>Working with the operations team in a technical support role</li>
                <li>Data analysis using MongoDB queries, Google Analytics and Kibana/Elasticsearch</li>
                </ul>
              </p>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="Jul 2017 - Jan 2018"
              dateInnerStyle={{ background: "#dddddd", color: "#000" }}
            >
              <h3>Prosper Systems Limited</h3>
              <h4>Senior Vice President of Client Operations</h4>
              <br></br>
              <p>
                The SenLab Group provides intelligent data solutions for both
                consumers and businesses globally. With such group members as
                Prosper Systems Limited, The SenLab Group brings innovation to
                SMEs. My role involved the running of all things client facing
                within Prosper Systems. I oversaw the customer relations
                department which included customer support, sales, marketing,
                whilst also overseeing the design of both our products and our
                marketing materials.
              </p>
              <br></br>
              <h4>Full Stack Software Engineering Intern</h4>
              <p>
                I was tasked with helping build the front-end for The SenLab
                Groups soon to be released product, Prosper BI. This involved
                programming in multiple languages (HTML, CSS, JavaScript,
                TypeScript and C++) within an ASP.net framework and becoming
                fluent in software development methodologies (AGILE scrum). I
                was also allowed to see the business side of running an
                organisation in this industry, giving me vast experience in the
                culture surrounding business startups and finance technology
                .
              </p>
            </TimelineItem>
            <TimelineItem
              key="003"
              dateText="Jun 2016 - Dec 2016"
              dateInnerStyle={{ background: "#dddddd", color: "#000" }}
            >
              <h3>A & T Computing</h3>
              <h4>Junior IT Consultant</h4>
              <br></br>
              <p>
                Whilst working as an IT consultant, my main role was to work
                alongside my boss in server install, configuration and migration
                (where needed).Further to this, I was dealing with the
                networking and the security infrastructure within the businesses
                that we were supporting.
              </p>
            </TimelineItem>
            <TimelineItem
              key="004"
              dateText="Aug 2016 - Sep 2016"
              dateInnerStyle={{ background: "#dddddd", color: "#000" }}
            >
              <h3>The London Fashion Agency</h3>
              <h4>Junior Web Developer</h4>
              <br></br>
              <p>
                I came to work at The London Fashion Agency on a freelance
                basis, to help with the launch of a new sister brand ‘Fashion PR
                Resources’. My main role was to create custom CSS injections for the
                payments and subscriptions section of the website, whilst also
                consulting on the building and branding of the site that was happening
                simultaneously.
              </p>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </React.Fragment>
  );
}
