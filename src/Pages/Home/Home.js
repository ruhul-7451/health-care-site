import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="mb-5">
            <div className="mb-3"><Banner></Banner></div>
            <div className="my-3"><Services></Services></div>
            <div className="my-3"><Doctors></Doctors></div>
            <div className="my-3"><About></About></div>
        </div>
    );
};

export default Home;