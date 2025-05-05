import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    const {image_url,title,details,category_id} = news;
    return (
        <div className='shadow-xl rounded-md p-4 space-y-8'>
            <img className='w-full rounded-md' src={image_url} alt="" />
            <h2 className='font-bold text-2xl'>{title}</h2>
            <p className='text-accent'>{details}</p>
            <Link className='btn btn-primary' to={`/category/${category_id}`}>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;