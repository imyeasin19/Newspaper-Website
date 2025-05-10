import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const {login} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email,password)
        .then (result =>{
            const user = result.user;
            console.log(user);
            navigate(`${location.state? location.state : '/'}`)
            alert('Login Successful')
        })
        .catch(error =>{
            setError(error.code);
        })
    }
    return (
       <div className='flex justify-center items-center mt-24'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-semibold text-center">Login your account</h1>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required/>

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required/>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    {
                        error && <p className='text-red-500'>{error}</p>
                    }
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className='text-md text-center font-bold mt-4'>Dont’t Have An Account ? <Link to='/auth/register' className='text-red-400 underline'>Register</Link></p>

                </form>
            </div>
        </div>
       </div>
    );
};

export default Login;