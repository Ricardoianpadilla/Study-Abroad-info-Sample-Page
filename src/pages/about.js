import React from "react";
import imgAbout from "../assets/images/about.jpg";
import "../css/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${imgAbout})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        As the leading online search engine for international travel 
        programs, we bring everything you need to travel abroad 
        straight to your fingertips—from thousands of program 
        opportunities with real life participant reviews, to expert 
        travel articles and scholarships. As you spin the globe, 
        daydream about your options, and buckle-down to plan your 
        own adventure, GoAbroad has got you covered every step of the 
        way. We’ve made it our mission to connect meaningful travelers 
        like you with the programs of your dreams.
        </p>
      </div>
    </div>
  );
}

export default About;