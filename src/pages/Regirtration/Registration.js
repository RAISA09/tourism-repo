import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="login-style">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/Sign In">Login</Link></p>
                <div>----------or-------------</div>
                <button className="btn-dark">Google Sign In</button>
            </div>
        </div>
    );
};

export default Registration;