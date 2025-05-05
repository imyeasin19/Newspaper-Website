import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user,logout} = use(AuthContext);

    const handleLogout = () =>{
        logout().then(()=>{
            alert('Logout Successful')
        }).catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='flex justify-between items-center py-4'>
            <div className=''></div>
            <div className="nav flex gap-4 items-center text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login flex gap-3 items-center">
                <img src={userIcon} alt="" />
                {
                    user? <button onClick={handleLogout} className='btn btn-secondary px-8'>Logout</button> : <Link to='/auth/login' className='btn btn-secondary px-8'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;