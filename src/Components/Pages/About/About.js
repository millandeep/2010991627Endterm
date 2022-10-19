import React from "react";
import "./About.css";
function About() {
  return (
    <div className="acontainer">
      <h1 id="aheading">About Us</h1>

      <p id="apara">
        Our aim is to provide high quality entertainment at reasonable prices
        for our clients around the world.
        <br />
        We provide a wide range of music venues ranging from venues that can
        accommodate up to 100 guests, to larger venues with capacity of over
        2000 guests.
        <br /> Our staff is always willing to help and listen to your ideas and
        requests to ensure that your event is perfect and your needs are met.
      </p>

      <div id="ainput">
        <label htmlFor="email">Enter your Email</label>
        <input type="text" id="email" placeholder="ENTER YOUR EMAIL"></input>

        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default About;
