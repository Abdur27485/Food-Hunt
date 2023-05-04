import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';

const ChefsCardContainer = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div id='chefs' className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-5'>
            {
                data.map( chef => <ChefCard key={chef.id} data={chef}></ChefCard>)
            }
        </div>
    );
};

export default ChefsCardContainer;