import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <Navbar></Navbar>
            </header>
            <main>
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;