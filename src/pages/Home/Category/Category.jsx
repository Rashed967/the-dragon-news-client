import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NesCard from '../NewsCard/NesCard';

const Category = () => {
    // const {id} = useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
            <h3>this is category has total news {categoryNews.length}</h3>
            {
                categoryNews.map(news => <NesCard
                key={news._id}
                news={news}
                ></NesCard>)
            }
        </div>
    );
};

export default Category;