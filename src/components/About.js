import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>Hey There! I'm Andrew.</h1>
      <div className="description">
        I'm currently a Computer Science major at Northwestern University. I do
        a lot of web development (mainly back-end / server-side stuff). I'm most
        comfortable with Express and Flask and have front-end experience in
        React and React Native — but I'm always down for a new challenge. You
        can find some of the projects I've worked on down below.
        <br />
        <br />
        I'm also the incoming Tech Studio Lead at Northwestern’s Develop +
        Innovate for Social Change and a peer mentor for CS 110 (Introductory
        Python). Going forward, I hope to utilize my skills in technology to
        positively affect others around me and beyond.
      </div>
    </div>
  );
};

export default About;