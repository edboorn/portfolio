import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

export default function workExperience() {
  return (
    <React.Fragment>
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateText="Sep 2018 – Present"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>PepperHQ</h3>
          <h4>Product Analyst</h4>
          <p></p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="Jul 2017 - Jan 2018"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>Prosper Systems Limited</h3>
          <h4>Senior Vice President of Client Operations</h4>
          <p>
            The SenLab Group provides intelligent data solutions for both
            consumers and businesses globally. With such group members as
            Prosper Systems Limited, The SenLab Group brings innovation to SMEs.
            My role involved the running of all things client facing within
            Prosper Systems. I oversaw the customer relations department which
            included customer support, sales, marketing, whilst also overseeing
            the design of both our products and our marketing materials.
          </p>
          <h4>Full Stack Software Engineering Intern</h4>
          <p>
            I was tasked with helping build the front end for The SenLab Groups
            soon to be released product, Prosper BI. This involved programming
            in multiple languages (HTML, CSS, JavaScript, TypeScript and C++)
            within an ASP.net framework and becoming fluent in software
            development methodologies (AGILE scrum). I was also allowed to see
            the business side of running an organisation in this industry,
            giving me vast experience in the culture surrounding business
            startups and the finance technology industry.
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="Jun 2016 - Dec 2016"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>A & T Computing</h3>
          <h4>Junior IT Consultant</h4>
          <p>
            Whilst working as an IT consultant, my main role was to work
            alongside my boss in server install, configuration and migration
            (where needed).Further to this, I was dealing with the networking
            and the security infrastructure within the businesses that we were
            supporting. As the job progressed,my role increase to web manager
            within A & T to increase our web presence, and improve that look of
            the website that is currently in use.
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="Aug 2016 - Sep 2016"
          dateInnerStyle={{ background: "#dddddd", color: "#000" }}
        >
          <h3>The London Fashion Agency</h3>
          <h4>Junior Web Developer</h4>
          <p>
            I came to work at The London Fashion Agency on a freelance basis, to
            help with the launch of a new sister brand ‘Fashion PR Resources’.
            My main role was to create custom CSS for the payments and
            subscriptions section of the website, whilst also consulting on the
            building of the site that was happening simultaneously.
          </p>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
