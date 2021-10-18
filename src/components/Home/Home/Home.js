import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Classes from '../Classes/Classes';
import Products from '../Products/Products';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Banner></Banner>
            <Classes></Classes>
            <Trainers></Trainers>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;