import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
       <div className='bg-base-200 min-h-screen'>
         <div className='p-4 w-10/12 mx-auto'>
           <header>
            <Navbar></Navbar>
           </header>
           <main>
            <Outlet></Outlet>
           </main>
        </div>
       </div>
    );
};

export default AuthLayout;