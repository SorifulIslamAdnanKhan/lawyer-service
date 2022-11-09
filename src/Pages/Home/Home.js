import React from 'react';
import Button from 'react-bootstrap/Button';
import './Home.css';

const Home = () => {
    return (
        <div>
            <section>
                <div className="hero-text">
                    <h2>Adam Kavin</h2>
                    <h4>Personal Injury & Accident Lawyers</h4>
                    <p>He has more the 10 years of exprienced. He solve more than 350+ cases during his entire professional career.</p>
                    <Button variant="primary">Get Started</Button>
                </div>
            </section>
        </div>



    );
};

export default Home;