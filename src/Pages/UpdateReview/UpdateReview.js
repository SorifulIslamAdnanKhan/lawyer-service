import React, { useState } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';


const UpdateReview = () => {

    const singleReview = useLoaderData();
    const [storedReview, setStoredReview] = useState(singleReview);

    const updateSingleReview = (event) => {
        event.preventDefault();
        console.log(storedReview);
        fetch(`https://akl-lawyer-service-server.vercel.app/singlereview/${singleReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(storedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast("Review updated successfully!");
                }
                <Navigate to='/reviews'></Navigate>;
            })
    }

    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...storedReview };
        newReview[field] = value;
        setStoredReview(newReview);
    }

    return (

        <div>
            <form onSubmit={updateSingleReview}  className='service-form'>
                <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">Rating</label>
                    <input onChange={handleInputChange} name="rating" defaultValue={singleReview.rating} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="message-text" className="col-form-label">Review</label>
                    <textarea onChange={handleInputChange} name="review" defaultValue={singleReview.review} rows={3} className="form-control"></textarea>
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Update User</button>
                </div>
            </form>
        </div>

    );
};

export default UpdateReview;