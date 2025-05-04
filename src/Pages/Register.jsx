import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center mt-24'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-semibold text-center">Register your account</h1>
                <fieldset className="fieldset">
                    <label className="label">Your Name</label>
                    <input type="text" className="input" placeholder="Enter your name" />
                    <label className="label">Photo Url</label>
                    <input type="text" className="input" placeholder="Enter your photo url" />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                    <p className='text-md text-center font-bold mt-4'>Already Have An Account ? <Link to='/auth/Login' className='text-red-400 underline'>Login</Link></p>
                </fieldset>
            </div>
        </div>
       </div>
    );
};

export default Register;