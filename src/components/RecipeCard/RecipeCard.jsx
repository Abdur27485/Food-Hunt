import React from 'react';
import { FcLike } from 'react-icons/fc';
import { MdFastfood } from 'react-icons/md';

const RecipeCard = ({ data }) => {
    const { recipeName, ingredients, cookingMethod, rating, recipeImage } = data
    return (
        <div className="rounded-xl border bg-slate-200 border-slate-400 p-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="grid-cols-1 lg:col-span-3 overflow-hidden">
                    <div className="flex items-center h-[300px] overflow-hidden">
                        <img src='https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg' className='' />
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-9">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-zinc-700">{recipeName}</h2>
                        <p className="mt-2 font-semibold text-zinc-700"> {rating}</p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-7 lg:grid-cols-2 text-center lg:text-left">
                        <div className='lg:mr-6'>
                            <p className="font-bold text-zinc-700">
                                <span className='text-blue-500'>Ingredients: </span>
                                {
                                    ingredients.map( ingredient => <span className='mr-1'>{ingredient}</span>)
                                }
                                </p>
                        </div>

                        <div>
                            <p className="font-bold text-zinc-700">
                                <span className='text-blue-500'>How to cook: </span>
                                {cookingMethod.length > 350 ? <> {cookingMethod.slice(0,350)}... </> : cookingMethod }
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className=" w-2/3 mx-auto block text-center rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">Add To Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;