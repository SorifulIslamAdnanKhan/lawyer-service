import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

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
                        {
                            user?.uid ?
                                <NavDropdown title={user?.displayName} id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to={'/add-service'}>Add Service</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/'}>My Review</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} onClick={handleLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;