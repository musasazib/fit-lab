import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import image from '../../../images/registration-form-template.jpg';

const Register = () => {

    const { googleSignIn, setEmail, setPassword, handleRegister, error, setName } = useAuth();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleName = e => {
        setName(e.target.value);
    }


    return (
        <div className="regis">
            <h1 className="text-center pt-5">Please Register</h1>
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 col-12 shadow p-5 container">
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" onBlur={handleName} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mt-2" >Register</button>
                        </div>
                    </form>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger mt-2">{error}</label>
                    </div>
                    <div className="form-group">
                        <Link to="/login"><input className="form-check-input" type="checkbox" name="" id="" /></Link>
                        <label htmlFor="" className="form-check-label">Already Register?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button onClick={googleSignIn} className="btn btn-primary" >Google Sign in</button>
                    </div>
                </div>
                <div className="col-md-6 col-12 d-none d-md-block">
                    <img className="img-fluid" src={image} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;