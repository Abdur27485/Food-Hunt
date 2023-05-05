import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const RecipeCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://recipe-chef-server-abdur27485.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories)
    return (
        <div className='mt-32'>
            <div id='chefs' className='relative my-10 mb-20 mx-5 lg:mx-20'>
                <p className='px-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl bg-white font-bold'>Categories</p>
                <hr className='bg-orange-500 h-[1.5px]' />
                <hr className='bg-orange-500 h-[1.5px] mt-2 mx-4' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5 lg:mx-32'>
                {
                    categories.map(category => {
                        const { recipesCount, photoUrl, id } = category;
                        return (
                            <div className='categoryWrapper w-full h-96 overflow-hidden relative' key={id}>
                                <div className='categoryBg w-full h-full hover:scale-110' style={{ backgroundImage: `url(${photoUrl})` }}>
                                    <div className='w-full h-full hover:bg-black hover:opacity-30'>
                                    </div>
                                </div>
                                <div className="ml-10 mb-10 absolute bottom-0 left-0">
                                    <h2 className='text-5xl text-gray-100 font-bold'>{category.category}</h2>
                                    <p className='text-orange-500 font-semibold text-xl'>{recipesCount} Recipes</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default RecipeCategories;