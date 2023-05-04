import React from 'react';

const ChefBanner = ({data}) => {
    const {chefName,numberOfRecipes,yearsOfExperiance,likes, id, shortBio} = data;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://images.hellomagazine.com/horizon/43/3ee129054e2c-gettyimages-827452536.jpg" alt="Album" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <p className="py-6">{shortBio}</p>
                        <div className='flex gap-5 justify-around bg-slate-300 px-4 py-3 rounded-3xl'>
                            <p>{yearsOfExperiance} Years of experiance</p>
                            <p>{likes} Likes</p>
                            <p>{numberOfRecipes} Recipes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefBanner;