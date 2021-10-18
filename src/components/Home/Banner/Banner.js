import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>IT’S <br />
                            GYM TIME</h1>
                        <h4>Lorem ipsum dolor sit amet, quo no quidam
                            facilis at pri deleniti comprehensam.</h4>
                        <button className="btn btn-warning">LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>DOING HARD WORK</h1>
                        <h4>Lorem ipsum dolor sit amet, probo aliquando percipitur ei vel, et vim simul iuvaret.
                            Mei ad legere eloquentiam. Ad pri habeo adversarium.</h4>
                        <button className="btn btn-warning">LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>MAKE IT HAPPEN!</h1>
                        <h4>WE ARE READY TO FIT YOU.</h4>
                        <button className="btn btn-warning">LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;