import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { classId } = useParams();
    return (
        <div>
            <h2>This is Booking {classId}</h2>
        </div>
    );
};

export default Booking;