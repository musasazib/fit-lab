import React from 'react';
import './Trainer.css';
import trainer1 from '../../../images/trainer1.png';
import trainer2 from '../../../images/trainer2.png';
import trainer3 from '../../../images/';

const Trainer = () => {
    return (
        <div>
            <h1 className="text-primary mt-5">OUR TRAINER</h1>
            <div className="trainer-container">
                <div className="service pb-3">
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                    <h5>{title}</h5>
                    <p>{subTitle}</p>
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-warning">Book {name.toLowerCase()}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Trainer;