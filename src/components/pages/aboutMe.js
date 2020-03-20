import React from "react";
import spaceImg from "../../Space.jpg"


export default function aboutMe() {
  return (
    <div className="pageRoot">
      <div style={{width:"100%"}}>
        <div style={{display : "inline-block",width:"40%", float: "left"}}>
          <h1>About me</h1>
          <p>
            My name is Edward Boorn and I am a Product Analyst at PepperHQ. As a
            developer-come-product person, I bring a wealth of experience from
            both disciplines which allows me to get the most out of the products
            that I am delivering.  </p>
            <p>On top of this, I continue to study all
            aspects of technology, physics and maths in order to generally
            improve my output as an individual (not to mention learning some
            pretty cool stuff in the process).
          </p>
              <h3>If you find this, this is a work in progress (I promise) </h3>
        </div>
        <div >
          <img style={{width : "30%"}} alt="Space is the place" src={spaceImg}/></div>
      </div>
    </div>
  );
}
