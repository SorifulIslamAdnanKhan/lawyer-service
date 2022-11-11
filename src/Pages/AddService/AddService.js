import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import './AddService.css';
import { toast } from 'react-toastify';

const AddService = () => {

    const [error, setError] = useState('');

    const handleService = (event) => {

        event.preventDefault();

        const form = event.target;
        const serviceName = form.serviceName.value;
        const image = form.image.value;
        const price = form.price.value;
        const serviceDetails = form.serviceDetails.value;
        
        const serviceData = {
            serviceName,
            image,
            price: parseInt(price),
            serviceDetails
        }

        fetch(`https://akl-lawyer-service-server.vercel.app/service`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                toast("Service added successfully!");
                form.reset();
            }
            <Navigate to='/services'></Navigate>
        })
        .catch(setError(''))
    }

    return (
        <section className='service-area'>
            <Helmet>
                <title>Add Service - AKL Lawyer Service</title>
            </Helmet>
            <Container>
                <Row>
                    <Col>
                        <div className='form-title'>
                            <h3>Add You Service</h3>
                        </div>
                        <Form onSubmit={handleService} className='service-form'>
                            <Form.Group className="mb-3">
                                <Form.Label>Service Name</Form.Label>
                                <Form.Control type="text" name="serviceName" placeholder="Service Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" name="image" placeholder="Service Image" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name="price" placeholder="Price" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Service Details</Form.Label>
                                <Form.Control as="textarea" name="serviceDetails" placeholder="Service Details" required rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                ADD SERVICE
                            </Button>
                            <p className='text-danger'>{error}</p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AddService;