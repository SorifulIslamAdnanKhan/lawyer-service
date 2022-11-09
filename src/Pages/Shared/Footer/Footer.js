import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import logo from '../../../../src/images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <div className='logo-address'>
                            <Image src={logo} className='footer-logo' />
                        </div>
                        <div className='footer-address'>
                            <h6>Your trusted lawyer who can ensure your damages.</h6>
                            <p>123 S 4th St, Las Vegas, NV 12004. <br />
                                (01) 123 456 7890</p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <h3>Practice Areas</h3>
                        <div className='office-hour'>
                            <p>Car Accidents</p>
                            <p>Truck Accidents</p>
                            <p>Personal Injury</p>
                            <p>Sports Injury</p>
                            <p>Dog Bites</p>
                            <p>Slip & Falls</p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <h3>Office Hour</h3>
                        <div className='office-hour'>
                            <p>Mon: 8.30 AM - 5.30 PM</p>
                            <p>Tue: 8.30 AM - 5.30 PM</p>
                            <p>Wed: 8.30 AM - 5.30 PM</p>
                            <p>Thu: 8.30 AM - 5.30 PM</p>
                            <p>Fri: 8.30 AM - 5.30 PM</p>
                        </div>
                    </Col>

                </Row>
            </Container>
            <div className='copyright'>
                <p>Copyright © 2022 AKL Injury and Accident Lawyer</p>
            </div>

        </div>
    );
};

export default Footer;