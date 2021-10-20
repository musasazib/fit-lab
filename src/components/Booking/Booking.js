import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Banner from '../Home/Banner/Banner';
import Footer from '../Shared/Footer/Footer';

const Booking = () => {

    const { classId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/musasazib/fake-dada/main/src/components/FitLab/classesFakedata.json')
            .then(res => res.json())
            .then(data => {
                const gym = data.find(td => td.id === classId);
                setDetails(gym)
            });
    }, [classId])
    const { img, name, price, title, subTitle, description } = details;

    return (
        <div>
            <Banner></Banner>
            <div className="text-center m-5 p-5">
                <h1 className="mb-5"><span className="package-title">Details:</span> {name}</h1>
                <img src={img} alt="" />
                <h1>Price: {price}</h1>
                <h3  className="package-title">Title: {title}</h3>
                <h5>{subTitle}</h5>
                <p>{description}</p>
                <Link to="/home#classes">
                    <button className="btn all-btn">Add to Cart</button>
                </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Booking;