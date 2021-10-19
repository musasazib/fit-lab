import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

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
        <div className=" container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
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
                <div className="col-md-6 d-none d-md-block">
                    {/* <img className="img-fluid" src={BannerImage} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Register;