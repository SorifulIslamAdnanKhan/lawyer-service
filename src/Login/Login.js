import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { setAuthToken } from '../api/auth';

const Login = () => {

    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');
    
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLoginIn = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                setAuthToken(user);
                setError('');
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <section className='login-area'>
            <Helmet>
                <title>Login - AKL Lawyer Service</title>
            </Helmet>
            <Container>
                <Row>
                    <Col>
                        <div className='form-title'>
                            <h3>Please Login</h3>
                        </div>
                        <Form onSubmit={handleLoginIn} className='login-form'>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                LOG IN
                            </Button>
                            <p className='text-danger'>{error}</p>
                        </Form>
                        <div className='sign-up-area'>
                            <p className='text-center'>New to <b>AKL Lawyer</b> Service <Link to='/signup'>Sign Up</Link></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;