import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
       <div className='flex justify-center items-center mt-24'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-semibold text-center">Login your account</h1>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className='text-md text-center font-bold mt-4'>Dont’t Have An Account ? <Link to='/auth/register' className='text-red-400 underline'>Register</Link></p>
                </fieldset>
            </div>
        </div>
       </div>
    );
};

export default Login;