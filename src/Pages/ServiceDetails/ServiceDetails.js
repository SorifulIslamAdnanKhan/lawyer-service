import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const service = useLoaderData();

    const {image, serviceName, serviceDetails, price} = service;

    return (
        <div className='service-details'>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Image src={image} className='img-fluid' />
                        </div>
                        <div className='service-info'>
                            <h3>{serviceName}</h3>
                            <h5>$ {price}</h5>
                            <p>{serviceDetails}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;