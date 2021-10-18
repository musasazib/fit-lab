import React from 'react';
import img from '../../images/banner2.jpg';
import img2 from '../../images/banner3.jpg';
import Banner from '../Home/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import './package.css';

const Package = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="text-center my-5 py-5">
                <h1>OUR PACKAGES</h1>
                <h6>They’re back! It’s time to pick your perfect home gym. <br /> Find the package that fits your budget (and space), add it to your cart, and get ready to lift BIG in small spaces. <br /> These packages offer no cost savings, but it gets you everything you need in just one click.</h6>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="border border-secondary mb-5">
                            <img src={img} alt="" className="img-fluid rounded-bottom" />
                            <div className="ps-5 py-4">
                                <div className="d-flex justify-content-start">
                                    <div>
                                        <h3>Body Building Program</h3>
                                        <p><span>Coach Shame Doe</span></p>
                                    </div>
                                    <div>
                                        <p><span className="price">$50</span>/M</p>
                                    </div>
                                </div>
                                <p>-  6 Days a Week</p>
                                <p>-  Dedicated Trainer Alocated</p>
                                <p>-  Diet Plan Included</p>
                                <p>-  Dedicated Trainer Alocated</p>
                                <p>-  Morning & Evening Batches</p>
                                <button className="btn btn-warning">Larne More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="border border-secondary mb-5">
                            <img src={img2} alt="" className="img-fluid rounded-bottom" />
                            <div className="ps-5 py-4">
                                <div className="d-flex justify-content-start">
                                    <div>
                                        <h3>Body Building Program</h3>
                                        <p><span>Coach Shame Doe</span></p>
                                    </div>
                                    <div>
                                        <p><span className="price">$75</span>/M</p>
                                    </div>
                                </div>
                                <p>-  6 Days a Week</p>
                                <p>-  Dedicated Trainer Alocated</p>
                                <p>-  Diet Plan Included</p>
                                <p>-  Dedicated Trainer Alocated</p>
                                <p>-  Morning & Evening Batches</p>
                                <button className="btn btn-warning">Larne More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Package;