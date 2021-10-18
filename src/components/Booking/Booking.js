import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {

    const { classId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/musasazib/fake-dada/main/src/components/FitLab/fakedata.json')
            .then(res => res.json())
            .then(data => {
                const gym = data.find(td => td.id === classId);
                setDetails(gym)
            });
    }, [classId])
    const { img, name, price, title, subTitle, description } = details;

    return (
        <div>

            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h1>Price: {price}</h1>
            <h3>Title: {title}</h3>
            <h5>{subTitle}</h5>
            <p>{description}</p>
            <Link to="/home#classes">
                <button className="btn btn-warning">Back to Home</button>
            </Link>
        </div>
    );
};

export default Booking;