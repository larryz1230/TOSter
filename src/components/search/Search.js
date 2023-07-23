import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from 'axios';
import Gallery from './Gallery';
import ErrorMessage from '../ErrorMessage';


function Search() {

    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const submitHandler = async () => {
        // e.preventDefault();
        
        // console.log(company);

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            setLoading(true);
            
            const { data } = await axios.post('/api/companies/results', {
                company,
            }, config);

            console.log(data);
            localStorage.setItem('companyName', JSON.stringify(data));

            setLoading(false);


        } catch (error) {
            setError(error.response.data.message);
        }
    }


    const fetchCompany = async () => {
        const { data } = await axios.get('/api/data');

        console.log(data);
    }

    useEffect(() => {
        fetchCompany();
    }, [])

    return (
        <>
            <h2 className="mb-3">Search by Company Name</h2>


            { error && <ErrorMessage variant = "danger">{ error }</ErrorMessage>}
            <Container className="mt-5">
                <Row className = "justify-content-center">
                    <Col sm={8}>
                    <Form className="d-flex" onSubmit = {submitHandler}>
                        <Form.Control
                        type="search"
                        placeholder="Company Name"
                        className="me-2 rounded-pill"
                        aria-label="Search"
                        value = { company }
                        onChange = {(e) => setCompany(e.target.value)}
                        />
                        <Button className="rounded-pill" variant="outline-primary" type = "submit">
                        Search
                        </Button>
                    </Form>
                    </Col>
                </Row>

                <Row>
                <h2>Or select from popular searches:</h2>
                <Gallery set={setCompany} submit = {submitHandler}></Gallery>
                </Row>
                
            </Container>

            
        </>
      );
}

export default Search;