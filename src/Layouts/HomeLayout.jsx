import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/Homelayouts/LeftAside';
import RightAside from '../Components/RightAside/RightAside';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <Navbar></Navbar>
            </header>
            <main className='grid grid-cols-12 mt-20 gap-4'>
                <aside className='col-span-3 p-4 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6 p-4'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 p-4 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;