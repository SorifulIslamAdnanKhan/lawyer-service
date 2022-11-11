import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './ServiceDetails.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);

    const { _id, image, serviceName, serviceDetails, price } = service;

    const [error, setError] = useState('');

    const handleReview = (event) => {

        event.preventDefault();

        const form = event.target;
        const serviceID = _id;
        const reviewer = user?.displayName
        const image = user?.photoURL;
        const rating = form.rating.value;
        const review = form.review.value;

        const reviewData = {
            serviceID,
            reviewer,
            image,
            rating,
            review
        }

        fetch(`https://akl-lawyer-service-server.vercel.app/add-review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast("Review added successfully!");
                    form.reset();
                }
            })
            .catch(setError(''))
    }

    return (
        <div className='service-details'>
            <Helmet>
                <title>Service Details - AKL Lawyer Service</title>
            </Helmet>
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
                <Row>
                    <Col>
                        <div className='text-center'>
                            <h3 >All Reviews</h3>
                        </div>

                    </Col>
                </Row>

                <Row>
                    {
                        user?.uid ?
                        <Form onSubmit={handleReview} className='service-form'>
                        <Form.Group className="mb-3">
                            <Form.Label>Service ID</Form.Label>
                            <Form.Control type="text" name="serviceID" defaultValue={_id} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Service ID</Form.Label>
                            <Form.Control type="text" name="reviewer" defaultValue={user?.displayName} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>User Image</Form.Label>
                            <Form.Control type="text" name="image" defaultValue={user?.photoURL} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="text" name="rating" placeholder="Rating" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Review</Form.Label>
                            <Form.Control as="textarea" name="review" placeholder="Review" required rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            ADD REVIEW
                        </Button>
                        <p className='text-danger'>{error}</p>
                    </Form>
                    :
                    <div>
                        <h3 className='text-center text-warning'>To add a review, you need to sign in the website.</h3>
                    </div>
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;