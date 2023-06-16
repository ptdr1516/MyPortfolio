import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          👋 Hi, I'm <span className="blue">Purvesh Patidar </span>
            , <span className="blue"> Full Stack Developer</span>
            &nbsp;with a passion for creating innovative software solutions. I have a proven track record of evaluating requirements and designing out-of-the-box solutions for software development projects. As an out-of-the-box thinker and problem solver, I am dedicated to improving performance and consistently delivering high-quality results.
            <br />
            <br />
            🎓I completed my <span className="blue">B.Tech</span> in Computer Science Engineering from <span className="blue">SRM University</span> Chennai(<span className="blue">2017-2021</span>).
            <br />
            <br />
            🔧 I contributed to the development of the <span className="blue">BRM</span> application layer using C, SQL database, and Linux server. I collaborated effectively with the web development team and other departments, creating React.js and Node.js web app, and ensured the creation of clean, validation-ready code for project needs.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Instruments & Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new Technologies
            </li>
          </ul>

          <p style={{ color: "blue" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Purvesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;