import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";

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

     <section>
       <Container fluid className="home-section" id="home">
         <Particle />
         <Container className="home-content">
           <Row>
             <Col md={7} className="home-header">
               <h1 style={{ paddingBottom: 15 }} className="heading">
                 Hi There!{" "}
               </h1>

               <h1 className="heading-name">
                 Welcome to:
                 <strong className="main-name"> Hackathon Project</strong>
               </h1>

               <div style={{ padding: 50, textAlign: "left" }}>
                 <Type />
              </div>
             </Col>

             <Col md={5} style={{ paddingBottom: 20 }}>
               {/* <img
                 src={homeLogo}
                 alt="home pic"
                 className="img-fluid"
                 style={{ maxHeight: "450px" }}
               /> */}
             </Col>
          </Row>
        </Container>
       </Container>
      <Container> 
        <button onClick = {handleUpload}>Get Started</button>
        </Container>
     
        <div>
        <button onClick = {handleSearch}>Search</button>
        </div>

        <div>
        <button onClick = {handleResults}>Results</button>
        </div>
        
     </section>

     
  );
}

export default Home;
