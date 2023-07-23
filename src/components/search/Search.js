import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import Gallery from "./Gallery";
import ErrorMessage from "../ErrorMessage";

import { useNavigate } from 'react-router-dom';

function Search() {
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    // Pass the prop while navigating to the target page
    navigate('/results', { state: { c_name: company } });
  };


  const submitHandler = async (e) => {
    e.preventDefault();

    // console.log(company);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/companies/results",
        {
          company,
        },
        config
      );

      console.log(data);
      localStorage.setItem("companyName", JSON.stringify(data));

      handleClick();

      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const fetchCompany = async () => {
    const { data } = await axios.get("/api/data");

    console.log(data);
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  return (
    <Container
      fluid
      className="search-bg d-flex flex-column justify-content-center align-items-center">
      <div className="search-white-bg">
        <h2 className="mb-3">Search by Company Name</h2>

        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col sm={8}>
              <Form
                className="d-flex"
                onSubmit={submitHandler}>
                <Form.Control
                  type="search"
                  placeholder="Company Name"
                  className="me-2 rounded-pill"
                  aria-label="Search"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <Button
                  className="rounded-pill"
                  variant="outline-dark"
                  type="submit">
                  Search
                </Button>
              </Form>
            </Col>
          </Row>

          <Row
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}>
            <h2 style={{ fontSize: "30px" }}>
              Or select from popular searches:
            </h2>
            <Gallery
              set={setCompany}
              submit={submitHandler}></Gallery>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Search;
