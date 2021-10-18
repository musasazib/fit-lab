import React from 'react';
import Banner from '../Banner/Banner';
import Classes from '../Classes/Classes';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Banner></Banner>
            <Classes></Classes>
            <Trainers></Trainers>
        </div>
    );
};

export default Home;