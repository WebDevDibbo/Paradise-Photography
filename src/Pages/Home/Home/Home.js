import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Service from '../Services/Service';
import Specialities from '../Specialities/Specialities';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
            <Specialities></Specialities>
        </div>
    );
};

export default Home;