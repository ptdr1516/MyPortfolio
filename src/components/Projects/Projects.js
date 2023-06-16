import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ERS from "../../assets/Projects/ERS.png";
import codeial from "../../assets/Projects/codeial.jpg";
import mealApp from "../../assets/Projects/mealapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeial}
              isBlog={false}
              title="Codeial"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with Node.js and Express.js. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/ptdr1516/codieal"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mealApp}
              isBlog={false}
              title="MealSearchApp"
              description="Introducing a cutting-edge meal searching app powered by Node.js! Discover a vast collection of mouthwatering recipes, filter by ingredients or dietary preferences, and receive personalized recommendations. Seamlessly save recipes, create shopping lists, and enjoy a seamless cooking experience. Savor delicious meals with ease, all in one app!"
              ghLink="https://github.com/ptdr1516/mealapp.github.io"
              demoLink="https://ptdr1516.github.io/mealapp.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ERS}
              isBlog={false}
              title="ERS"
              description="Employee Review System app, built with Node.js, streamlines performance evaluations. It enables managers to provide feedback, set goals, and track employee progress. Enhance your team's productivity and foster growth with this user-friendly and efficient application."
              ghLink="https://github.com/ptdr1516/employee_review_system"
              demoLink="https://ers-uosk.onrender.com/sign-in"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
