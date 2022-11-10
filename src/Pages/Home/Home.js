import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FaMoneyBill, FaMoneyCheckAlt, FaUserCircle, FaUsers } from 'react-icons/fa';
import './Home.css';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - AKL Lawyer Service</title>
            </Helmet>
            <section className='hero-area'>
                <div className="hero-text">
                    <h2>Adam Kavin</h2>
                    <h4>Personal Injury & Accident Lawyers</h4>
                    <p>He has more the 10 years of exprienced. He solve more than 1050+ cases during his entire professional career.</p>
                    <Button variant="primary">Get Started</Button>
                </div>
            </section>

            <section className='service-area'>
                <Container>
                    <div className='service-title'>
                        <h2>My Services</h2>
                    </div>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className='why-area'>
                <Container>
                    <Row>
                        <div className='why-title'>
                            <h3>Why Choose Adam Kavin?</h3>
                        </div>
                        <Col sm={12} md={6}>
                            <FaMoneyCheckAlt className='why-icon'></FaMoneyCheckAlt>
                            <h4>No Fee Unless You Win</h4>
                            <p>You don't need to pay before.</p>
                        </Col>
                        <Col sm={12} md={6}>
                            <FaMoneyBill className='why-icon'></FaMoneyBill>
                            <h4>Multi Millions in Recoveries</h4>
                            <p>I've recoverd more than 1 millions dollar</p>
                        </Col>
                        <Col sm={12} md={6}>
                            <FaUserCircle className='why-icon'></FaUserCircle>
                            <h4>Thousands of Happy Clients</h4>
                            <p>More than 1000 of clients trusted on me.</p>
                        </Col>
                        <Col sm={12} md={6}>
                            <FaUsers className='why-icon'></FaUsers>
                            <h4>100% Case Win</h4>
                            <p>I'm still undefeated</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='contact-area'>
                <Container>
                    <Row>
                        <Col sm={12} md={7}>
                            <div className='contact-details'>
                                <h3>Ready to get answers from a qualified injury lawyer?</h3>
                                <p>FREE Consultation</p>
                                <h5>Call: +1 123 456 500</h5>
                            </div>
                        </Col>
                        <Col sm={12} md={5}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Case Details</Form.Label>
                                    <Form.Control as="textarea" aria-label="Case Details" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    GET HELP NOW
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;