import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser, setUser} = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.phototurl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            setUser(user);
            navigate('/');
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='flex justify-center items-center mt-24'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-semibold text-center">Register your account</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Your Name</label>
                    <input type="text" name='name' className="input" placeholder="Enter your name" required/>

                    <label className="label">Photo Url</label>
                    <input type="text" name='phototurl' className="input" placeholder="Enter your photo url" required/>

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required/>

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required/>
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    <p className='text-md text-center font-bold mt-4'>Already Have An Account ? <Link to='/auth/Login' className='text-red-400 underline'>Login</Link></p>
                </form>
            </div>
        </div>
       </div>
    );
};

export default Register;