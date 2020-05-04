import React from "react";
import spaceImg from "../../Space.jpg";
import Me from '../../me.jpg'
export default function aboutMe() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h1>Hi, I'm <code>Ed</code></h1>
          <p>
            I am a Product Analyst at
            PepperHQ. As a developer-come-product person, I bring a wealth of
            experience from both disciplines which allows me to get the most out
            of the products that I am delivering.{" "}
          </p>
          <p>
            On top of this, I continue to study all aspects of technology,
            physics and maths in order to generally improve my output as an
            individual (not to mention learning some pretty cool stuff in the
            process).
          </p>
          
        </div>
        <div className="col">
          <img src={Me} alt="This is me" width="300" />
        </div>
        
      </div>
    </React.Fragment>
  );
}
