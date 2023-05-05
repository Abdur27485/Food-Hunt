import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const ChefsCardContainer = () => {
    const data = useLoaderData();
    return (
        <div className=' mt-32'>
            <div id='chefs' className='relative my-10 mb-20 mx-5 lg:mx-20'>
                <p className='px-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl bg-white font-bold'>CHEFS</p>
                <hr className='bg-orange-500 h-[1.5px]' />
                <hr className='bg-orange-500 h-[1.5px] mt-2 mx-4' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-5'>
                {
                    data.map(chef => <ChefCard key={chef.id} data={chef}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefsCardContainer;