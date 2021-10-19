import React from 'react';
import './Classify.css';
import { Link } from 'react-router-dom';

const Classify = ({ classify }) => {
    const { id, img, name, title, subTitle } = classify;
    return (
        <div className="service-class pb-3">
            <img src={img} alt="" />
            <div className="p-3 text-center">
                <h3>{name}</h3>
                <h5>{title}</h5>
                <p>{subTitle}</p>
                <Link to={`/booking/${id}`}>
                    <button className="btn btn-warning">Book {name.toLowerCase()}</button>
                </Link>
            </div>
        </div>
    );
};

export default Classify;