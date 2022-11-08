import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>
                    <Image className='logo' src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/services'}>Services</Nav.Link>
                        <Nav.Link as={Link} to={'/blog'}>Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to={'/'}>Action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/'}>Another action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/'}>Something</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/'}>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;