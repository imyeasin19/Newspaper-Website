import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
 
    const [news, setNews] =useState([]);

    useEffect(() =>{
        if(id == '0'){
            setNews(data);
            return;
        }
        else if (id =='1'){
            const filteredNews = data.filter(news => news.others.is_today_pick == true)
            setNews(filteredNews);
        }
        else{
            const filteredNews = data.filter(news => news.category_id == id)
            setNews(filteredNews);
        }
    },[data, id])
    
    return (
        <div>
            <h2>Found News - {news.length}</h2>
            
            <div className='grid grid-cols-1 gap-4'>
                {
                    news.map((en) => <NewsCard key={en.id} news ={en}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;