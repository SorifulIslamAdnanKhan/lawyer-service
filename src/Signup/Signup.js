import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const Signup = () => {

    const auth = getAuth();
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                newLoginUser();
                setError('');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })

        const newLoginUser = () => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            })
                .then(() => { })
                .catch(error => {
                    setError(error.message);
                })
        }
    }

    return (
        <section className='login-area'>
            <Helmet>
                <title>Sign UP - AKL Lawyer Service</title>
            </Helmet>
            <Container>
                <Row>
                    <Col>
                        <div className='form-title'>
                            <h3>Please Sign Up</h3>
                        </div>
                        <Form onSubmit={handleSignUp} className='login-form'>
                            <Form.Group className="mb-3">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Your Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" name="photoURL" placeholder="Image URL" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                SIGN UP
                            </Button>
                            <p className='text-danger'>{error}</p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Signup;