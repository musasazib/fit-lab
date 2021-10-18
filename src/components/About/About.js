import React from 'react';
import img from '../../images/banner1.jpg'
import user from '../../images/testimonial-profile.png';
import Banner from '../Home/Banner/Banner';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="text-center my-5 py-5">
                <h1>ABOUT US</h1>
                <p>From the moment you walk through the door you know Gymnast is a unique <br /> place</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={img} alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col-12 col-md-6 ">
                        <h1 className="ps-2">WHO WE ARE</h1>
                        <p className="ps-2">Who are you?’ Instinctively you‘d probably answer that question stating your name, age background, hobbies and job. Explaining who you truly are, is no topic for small talks. And there’s no shame in that. Your true identity is an inherently complex phenomenon. You are you — but how exactly is ‘you’.
                            <br />
                            <br />
                            - Unlike a drop of water which loses its identity.
                            <br />
                            <br />
                            - When it joins the ocean, people do not lose their.
                            <br />
                            <br />
                            - Life is independent, born not for the development.
                            <br />
                            <br />
                            - Society alone, but for the development of his self.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container my-5 py-5 bg-light">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3>01. PICK YOUR TRAINER</h3>
                        <p>Lorem ipsum dolor sit amen, vis probe mediocrities ne. Qui</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3>02. PICK YOUR WORKOUT</h3>
                        <p>Lorem ipsum dolor sit amen, vis probe mediocrities ne. Qui</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3>03. START TRAINING</h3>
                        <p>Lorem ipsum dolor sit amen, vis probe mediocrities ne. Qui</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h1 className="mt-5 py-5 fw-bold">SUCCESS <span className="text-danger">STORIES</span></h1>
                <p className="mb-5">
                    World is committed to making participial in the event that raiment free experience for every, <br /> regardless level of experience, gender identity.and expression orientation, disability by the <br /> personal appearance
                </p>
                <div className="d-flex justify-content-center mb-5">
                    <img src={user} alt="" className="rounded-circle" />
                    <div className="m-3">
                        <h3>William Mill</h3>
                        <p>Body Building Trainer</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;