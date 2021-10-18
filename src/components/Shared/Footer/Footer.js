import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark text-light mt-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <img src={logo} alt="" style={{ width: "150px" }} />
                            <hr />
                        </div>
                        <div className="col-12 col-md-3">
                            <h4>QUICK LINKS</h4>
                            <p>Classes</p>
                            <p>Faq</p>
                            <p>Our Trainer</p>
                            <p>Daily workout</p>
                            <p>Products</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="col-12 col-md-3">
                            <p>About online food</p>
                            <p>Read our blog</p>
                            <p>Sign up to deliver</p>
                            <p>Add your restaurant</p>
                            <hr />
                        </div>
                        <div className="col-12 col-md-3">
                            <p>Get help</p>
                            <p>Read FAQs</p>
                            <p>View all cities</p>
                            <p>Restaurants near me</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;