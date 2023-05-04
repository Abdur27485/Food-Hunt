import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipesContainer = ({ recipesId }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(`https://recipe-chef-server-abdur27485.vercel.app/chefs/recipes/${recipesId}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    console.log(recipes.recipes)
    return (
        <div className='mx-5 grid grid-cols-1 gap-5 mt-10'>
            {
                recipes.recipes?.map(recipe => <RecipeCard key={recipe.id} data={recipe}></RecipeCard>)
            }
        </div>
    );
};

export default RecipesContainer;