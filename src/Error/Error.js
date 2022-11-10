import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>404 - AKL Lawyer Service</title>
            </Helmet>
            <Container className='text-center error-page'>
                <h2>404</h2>
                <Row>
                    <Col>
                        <FaExclamationTriangle className='error-icon'></FaExclamationTriangle>
                        <h3>Page Not Found</h3>
                        <Link to='/' className='btn btn-primary'>Back To Home</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Error;