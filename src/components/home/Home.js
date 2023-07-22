import React from "react";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import homeLogo from "../../Assets/toast.jpg";

function Home() {

  function handleUpload() {
    window.location.href = 'http://localhost:3000/upload'
  }

  function handleSearch() {
    window.location.href = 'http://localhost:3000/search'
  }

  function handleResults() {
    window.location.href = 'http://localhost:3000/results'
  }

  return (
    <>
     <section>
     <Container
        fluid
        className="home-section h-100"
        id="home">
        <Container className="home-content">
          <Row>
            <Col
              md={7}
              className="home-header">
              <h1
                style={{ paddingBottom: 15 }}
                className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading-name">
                Welcome to:
                <strong className="main-name"> TOSter</strong>
              </h1>

              <div className="heading-navbar">
                <Type />
              </div>
            </Col>

            {
              <Col
                md={5}
                style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "400px" }}
                />
              </Col>
            }
          </Row>
        </Container>
      </Container>
      
        
     </section>

     <section>
      <Container> 
     
        <button className = 'button-container' onClick = {handleUpload}>Get Started</button>
        </Container>
    
        <button className = 'button-container' onClick = {handleSearch}>Search</button>
        

      </section>
    
    </>
  );
  
}


export default Home;
