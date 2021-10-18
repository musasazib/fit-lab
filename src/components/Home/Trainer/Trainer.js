import React from 'react';

const Trainer = ({ trainer }) => {
    const { img, name, designation } = trainer;
    return (
        <div>
            <div className="service pb-3">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default Trainer;