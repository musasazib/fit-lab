import React from 'react';
import './Trainer.css';

const Trainer = ({ trainer }) => {
    const { img, name, designation } = trainer;
    return (
        <div>
            <div className="service-tain pb-3">
                <img src={img} alt="" />
                <div className="taine-name">
                    <h3>{name}</h3>
                    <p>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default Trainer;