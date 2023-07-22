import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button, Col, Container, Form, Row } from "react-bootstrap";


function Search() {
    return (
        <>
            <div className="display-4 font-weight-bold">Search</div>
            <Container className="mt-5">
            <Row className = "justify-content-center">
                <Col sm={8}>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Company Name"
                    className="me-2 rounded-pill"
                    aria-label="Search"
                    />
                    <Button className="rounded-pill" variant="outline-primary">
                    Search
                    </Button>
                </Form>
                </Col>
            </Row>
            </Container>
        </>
      );

}

export default Search;