import React from "react";
import { Col, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { FaInstagram, FaAirbnb, FaGithub, FaGoogle, FaApple,FaFacebook, FaAmazon, FaReddit, FaDiscord, FaMicrosoft, FaSlack, FaPlaystation, FaLinkedin, FaLyft, FaTiktok } from "react-icons/fa6";
import "./icons.css";
import { useNavigate } from 'react-router-dom';

function Techstack(props) {

  const navigate = useNavigate();

  const handleClick = async (input) => {
    navigate('/results', { state: { c_name: input } });
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleClick("test")}>
        <FaAirbnb />
      </Col>
      <Col xs={4} md={2} className="tech-icons"onClick={() => handleClick("Apple")} >
        <FaApple  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleClick("Github")}>
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons"onClick={() => handleClick("Google")}>
        <FaGoogle />
      </Col>
      <Col xs={4} md={2} className="tech-icons"onClick={() => handleClick("Instagram")}>
        <FaInstagram />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleClick("Facebook")}>
        <FaFacebook />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleClick("Playstation")}>
        <FaPlaystation />
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
      <Col xs={4} md={2} className="tech-icons" onClick={() => handleClick("LinkedIn")}>
        <FaLinkedin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTiktok />
      </Col>
    </Row>
  );
}

export default Techstack;