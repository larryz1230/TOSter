import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaInstagram, FaAirbnb, FaGithub, FaGoogle, FaApple,FaFacebook, FaAmazon, FaReddit, FaDiscord, FaMicrosoft, FaSlack, FaPlaystation, FaLinkedin, FaLyft, FaTiktok } from "react-icons/fa6";
import "./icons.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaAirbnb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGoogle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaInstagram />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFacebook />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAmazon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReddit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDiscord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < FaMicrosoft/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLyft />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinkedin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTiktok />
      </Col>
    </Row>
  );
}

export default Techstack;