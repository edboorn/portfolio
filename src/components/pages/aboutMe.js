import React from "react";
import Me from '../../me.jpg'
export default function aboutMe() {
  return (
    <React.Fragment>
      <div id="mainHeader"  className="row">
        <div className="col">
          <h1>Hi, I'm <code>Ed</code></h1>
          <p>
            I am a Digital Product Manager at nate. As a developer-come-product person, I bring a wealth of
            experience from both disciplines which allows me to get the most out
            of the products that I am delivering.{" "}
          </p>
          <p>
            Away from my work I love <code>programming</code>, <code>coffee</code>, <code>sport</code> and <code>food</code>
          </p>
          
        </div>
        <div className="col">
          <img src={Me} alt="This is me" width="300" />
        </div>
        
      </div>
    </React.Fragment>
  );
}
