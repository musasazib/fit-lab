import React from 'react';
import Banner from '../Banner/Banner';
import Classes from '../Classes/Classes';
import Trainer from '../Trainer/Trainer';

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Banner></Banner>
            <Classes></Classes>
            <Trainer></Trainer>
        </div>
    );
};

export default Home;