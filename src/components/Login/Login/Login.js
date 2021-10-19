import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import BannerImage from '../../../images/ebale-nutanix-cvm-ahv-login-banner-1-1.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    const { googleSignIn, setEmail, setPassword, handleLogin, error } = useAuth();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <h1 className="text-center pt-5">Please Login</h1>
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 col-12 shadow p-5">
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mt-2" >Login</button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                        </div>
                        <div className="form-group  mt-2">
                            <Link to="/register"><input className="form-check-input" type="checkbox" name="" id="" /></Link>
                            <label htmlFor="" className="form-check-label">Not Registration?</label>
                        </div>
                        <div className="from-group mt-5">
                            <button onClick={googleSignIn} className="btn btn-primary" >Google Sign in</button>
                        </div>
                    </form>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger mt-2">{error}</label>
                    </div>
                </div>
                <div className="col-md-6 col-12 d-none d-md-block">
                    <img className="img-fluid" src={BannerImage} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;