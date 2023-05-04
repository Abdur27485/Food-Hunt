import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ChefBanner from '../../components/ChefBanner/ChefBanner';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import RecipesContainer from '../../components/RecipesContainer/RecipesContainer';

const Chef = () => {
    const data = useLoaderData();
    return (
        <div className='bg-slate-400'>
            <Navbar></Navbar>
            <ChefBanner data={data}></ChefBanner>
            <RecipesContainer></RecipesContainer>
        </div>
    );
};

export default Chef;