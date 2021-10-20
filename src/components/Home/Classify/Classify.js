import React from 'react';
import './Classify.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid';

const Classify = ({ classify }) => {
    const { id, img, name, title, subTitle } = classify;
    const element = <FontAwesomeIcon icon={faPlusCircle} />
    return (
        <div className="service-class pb-3">
            <img className="service-class-img" src={img} alt="" />
            <div className="p-3">
                <div className="d-flex justify-content-between">
                    <div>
                        <h3>{name}</h3>
                        <h5>{title}</h5>
                    </div>
                    <div>
                        <Link to={`/booking/${id}`}><h1 className="plus-icon">{element}</h1></Link>
                    </div>
                </div>
                <p>{subTitle}</p>
                <Link to={`/booking/${id}`}>
                    <button className="btn class-btn btn-read">READ MORE</button>
                </Link>
                <Link to={`/booking/${id}`}>
                    <button className="btn class-btn btn-book">BOOKING</button>
                </Link>
            </div>
        </div>
    );
};

export default Classify;