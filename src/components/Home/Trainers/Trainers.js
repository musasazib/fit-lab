import React, { useEffect, useState } from 'react';
import Trainer from '../Trainer/Trainer';
import './Trainers.css';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/musasazib/fake-dada/main/src/components/FitLab/trainerFakedata.json')
            .then(res => res.json())
            .then(data => setTrainers(data));
    }, [])
    return (
        <div>
            <h1 className="text-primary mt-5">OUR TRAINER</h1>
            <div className="trainer-container">
                {
                    trainers.map(trainer => <Trainer
                        key={trainer.id}
                        trainer={trainer}
                    ></Trainer>)
                }
            </div>
        </div>
    );
};

export default Trainers;