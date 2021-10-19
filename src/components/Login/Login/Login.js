import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { googleSignIn, setEmail, setPassword, handleLogin, error } = useAuth();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <div className=" container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
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
                        <div className="from-group mt-5">
                            <button onClick={googleSignIn} className="btn btn-primary" >Google Sign in</button>
                        </div>
                    </form>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger mt-2">{error}</label>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    {/* <img className="img-fluid" src={BannerImage} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Login;