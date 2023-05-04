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
        <div className='mt-24'>
            <div className='relative my-10 mb-20 mx-5 lg:mx-20'>
                <p className='px-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl bg-white font-bold'>Recipes</p>
                <hr className='bg-orange-500 h-[1.5px]' />
                <hr className='bg-orange-500 h-[1.5px] mt-2 mx-4' />
            </div>
            <div className='mx-5 grid grid-cols-1 gap-5 mt-10'>
                {loading ?
                    <progress className="progress w-56 mx-auto"></progress>
                    :
                    recipes.recipes?.map(recipe => <RecipeCard key={recipe.id} data={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default RecipesContainer;