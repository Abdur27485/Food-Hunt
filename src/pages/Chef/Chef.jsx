import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ChefBanner from '../../components/ChefBanner/ChefBanner';
import { useLoaderData } from 'react-router-dom';

const Chef = () => {
    const data = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <ChefBanner data={data}></ChefBanner>

        </div>
    );
};

export default Chef;