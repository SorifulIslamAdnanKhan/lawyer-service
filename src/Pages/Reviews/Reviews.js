import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Table from 'react-bootstrap/Table';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Reviews = () => {
    const { user, logout } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://akl-lawyer-service-server.vercel.app/my-reviews?email=${user?.email}`, {
            headers:{
                authorization: `Bearer ${localStorage.getItem('lawyer-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    return logout();
                 }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logout])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this review.');
        if (proceed) {
            fetch(`https://akl-lawyer-service-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Review Deleted successfully!");
                        const remaning = reviews.filter(comment => comment._id !== id);
                        setReviews(remaning);
                    }
                })
        }
    }

    return (
        <div className='p-5'>
            <Helmet>
                <title>My Reviews - AKL Lawyer Service</title>
            </Helmet>
            <h3 className='text-center p-5'>My Reviews</h3>
            {
                user?.email ?
                    <Table striped bordered hover responsive="sm" >
                        <thead>
                            <tr>
                                <th>Review</th>
                                <th>Rating</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review =>
                                    <tr>
                                        <td>{review.review}</td>
                                        <td>{review.rating}</td>
                                        <td>
                                            <div>
                                                <Link to={`/update/${review._id}`} type="button" className="btn btn-primary"><FaEdit className='text-light'></FaEdit> Update</Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <button onClick={() => handleDelete(review._id)} className='btn btn-danger'><FaTrash className='text-light'></FaTrash> Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </Table>
                    :
                    <div>
                        <h3 className='text-center text-warning'>You have no review.</h3>
                    </div>
            }

        </div>
    );
};

export default Reviews;