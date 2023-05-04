import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipesContainer = ({ recipesId }) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://recipe-chef-server-abdur27485.vercel.app/chefs/recipes/${recipesId}`)
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='mx-5 grid grid-cols-1 gap-5 mt-10'>
            {loading ?
                <progress className="progress w-56 mx-auto"></progress>
                :
                recipes.recipes?.map(recipe => <RecipeCard key={recipe.id} data={recipe}></RecipeCard>)
            }
        </div>
    );
};

export default RecipesContainer;