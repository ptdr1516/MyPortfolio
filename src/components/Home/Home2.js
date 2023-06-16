import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
        <Container>
            <Row>
                <Col md={8} className='home-about-description'>
                    <h1 style={{fontSize: "2.5rem"}}>
                        LET ME <span className='blue'>
                            INTRODUCE
                        </span> MYSELF
                    </h1>
                    <p className='home-about-body'>
                      Building Seamless Web Experiences from Frontend to Backend,
                      <br/>
                      <br/>I am fluent in languages like
                      <i>
                        <b className='blue'>&nbsp;Java, Javascript and Python.</b>
                      </i>
                      <br/>
                      <br/>
                      My field of Interest's are building new&nbsp;
                      <i>
                        <b className='blue'>Web Technologies and Products </b> and
                        also in areas realed to{" "}
                        <b className='blue'>
                            BRM.
                        </b>
                      </i>
                      <br/>
                      <br/>
                      Transforming Ideas into Exceptional Web Experiences
                      with <b className='blue'>Node.js</b> and
                      <i>
                        <b className='blue'>
                            {" "}
                            Modern JavaScript Library and Frameworks
                        </b>
                      </i>
                      &nbsp; like
                      <i>
                        <b className='blue'>&nbsp;React.js and Express.js</b>
                      </i>
                    </p>
                </Col>
                <Col md={4} className='myAvatar'>
                    <Tilt>
                        <img src={myImg} className='img-fluid' alt='avatar'/>
                    </Tilt>
                </Col>
            </Row>
            <Row>
                <Col md={12} className='home-about-social'>
                    <h1>WHERE TO FIND</h1>
                    <p>
                        Feel free to <span className='blue'>connect </span> with me
                    </p>
                    <ul className='home-about-social-links'>
                        <li className='social-icons'>
                            <a
                            href='https://twitter.com/ptdr1516'
                            target="_blank"
                            rel="noopener noreferrer"
                            clasName="icon-colour home-social-icons"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a
                            href='https://www.instagram.com/ptdr1516/'
                            target="_blank"
                            rel="noopener noreferrer"
                            clasName="icon-colour home-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                        <li className='social-icons'>
                            <a
                            href='https://www.linkedin.com/in/purvesh-patidar-1982721b8/'
                            target="_blank"
                            rel="noopener noreferrer"
                            clasName="icon-colour home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </Container>
  );
}

export default Home2;
