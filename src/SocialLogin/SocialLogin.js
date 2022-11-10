import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';


const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const [error, setError] = useState('');
        
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            setError('');
            navigate(from, {replace: true});
        })
        .catch(err=>{
            setError(error.message);
        });
    }

    return (
        <div>
            <p className='text-center'>
                <Button onClick={handleGoogleSignIn} variant="light"><FaGoogle></FaGoogle> Google</Button>
            </p>
        </div>
    );
};

export default SocialLogin;