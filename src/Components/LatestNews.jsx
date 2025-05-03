import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 bg-base-200 p-3 items-center'>
            <p className='bg-primary p-2 text-white'>Latest</p>
            <Marquee className='space-x-5'>
            <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate porro at explicabo deleniti.</p>
            <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate porro at explicabo deleniti.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;