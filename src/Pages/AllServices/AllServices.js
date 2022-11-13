import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServices = () => {

    
    const allServices = useLoaderData();

    console.log(allServices);
    
    return (
        <section className='service-area'>
            <Helmet>
                <title>All Services - AKL Lawyer Service</title>
            </Helmet>
            <Container>
                <div className='service-title'>
                    <h2>All Services</h2>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        allServices.map(service =>
                            <Col>
                                <Card>
                                    <PhotoProvider>
                                        <PhotoView src={service.image}>
                                        <Card.Img variant="top" src={service.image} className='service-image' />
                                        </PhotoView>
                                    </PhotoProvider>
                                    <Card.Body>
                                        <Card.Title>{service.serviceName}</Card.Title>
                                        <Card.Text>
                                            {service.price}</Card.Text>
                                        <Card.Text>
                                            {service.serviceDetails.length > 100 ? service.serviceDetails.slice(0, 100) : service.serviceDetails}
                                        </Card.Text>
                                        <Link to={`/service-details/${service._id}`} className='btn btn-primary'>Service Details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>)
                    }
                </Row>
            </Container>

        </section>
    );
};

export default AllServices;