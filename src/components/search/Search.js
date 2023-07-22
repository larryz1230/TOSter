import React, { useEffect, useState } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from 'axios';


function Search() {

    const [comp, setComp] = useState([]);

    const fetchCompany = async () => {
        const { data } = await axios.get('/api/data');

        console.log(data);
    }

    useEffect(() => {
        fetchCompany();
    }, [])

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