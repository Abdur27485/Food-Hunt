import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ChefBanner from '../../components/ChefBanner/ChefBanner';
import { useLoaderData } from 'react-router-dom';
import RecipesContainer from '../../components/RecipesContainer/RecipesContainer';

const Chef = () => {
    const data = useLoaderData();
    return (
        <div className='bg-slate-400'>
            <Navbar></Navbar>
            <ChefBanner data={data}></ChefBanner>
            <RecipesContainer recipesId={data.id}></RecipesContainer>
        </div>
    );
};

export default Chef;