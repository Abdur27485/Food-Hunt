import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';

const ChefsCardContainer = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 mx-3 md:w-9/12 md:mx-auto'>
            {
                data.map( chef => <ChefCard key={chef.id} data={chef}></ChefCard>)
            }
        </div>
    );
};

export default ChefsCardContainer;