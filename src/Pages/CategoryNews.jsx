import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Category News - {id}</h2>
        </div>
    );
};

export default CategoryNews;