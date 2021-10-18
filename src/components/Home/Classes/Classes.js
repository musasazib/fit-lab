import React, { useEffect, useState } from 'react';
import Classify from '../Classify/Classify';
import './Classes.css';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/musasazib/fake-dada/main/src/components/FitLab/classesFakedata.json')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])
    return (
        <div id="classes">
            <h1 className="text-primary mt-5">OUR POPULAR CLASSES</h1>
            <h4>Lorem ipsum dolor sit amen, quo no quid's facile fatidic at pri delegati comprehension. Cum dicot nunquam in.
                Mel et impetus fibulas consequently.</h4>
            <div className="classify-container">
                {
                    classes.map(classify => <Classify
                        key={classify.id}
                        classify={classify}
                    ></Classify>)
                }
            </div>
        </div>
    );
};

export default Classes;