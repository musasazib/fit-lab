import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import image from '../../../images/Screenshot_10.png';

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
                            <h4 className="footer-text">QUICK LINKS</h4>
                            <p className="footer-text">- Classes</p>
                            <p className="footer-text">- Faq</p>
                            <p className="footer-text">- Our Trainer</p>
                            <p className="footer-text">- Daily workout</p>
                            <p className="footer-text">- Products</p>
                            <p className="footer-text">- Contact Us</p>
                        </div>
                        <div className="col-12 col-md-3">
                            <p className="footer-text">About online food</p>
                            <p className="footer-text">Read our blog</p>
                            <p className="footer-text">Sign up to deliver</p>
                            <p className="footer-text">Add your restaurant</p>
                            <p className="footer-text">View all cities</p>
                            <p className="footer-text">Restaurants near me</p>
                            <hr />
                        </div>
                        <div className="col-12 col-md-3">
                            <p className="footer-text">Get help</p>
                            <p className="footer-text">Read FAQs</p>
                            <img src={image} alt="" />
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;