import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import RightAside from '../Components/RightAside/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});

    useEffect(()=>{
        const newsDetails = data.find(item => item.id == id);
        setNews(newsDetails);
    },[data, id]);
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-4'>
                <section className='col-span-9'>
                    <h2 className='mb-5'>
                        News Details
                        <NewsDetailsCard news={news}></NewsDetailsCard>
                    </h2>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;