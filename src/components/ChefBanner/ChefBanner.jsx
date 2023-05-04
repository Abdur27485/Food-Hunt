import React from 'react';
import { FcLike } from "react-icons/fc";
import { MdFastfood } from "react-icons/md";
import { GiCook } from "react-icons/gi";

const ChefBanner = ({data}) => {
    const {chefName,numberOfRecipes,yearsOfExperiance,likes, id, shortBio,chefPictureUrl} = data;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={chefPictureUrl} alt="Album" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <p className="py-6">{shortBio}</p>
                        <div className='flex gap-5 justify-around bg-slate-300 px-4 py-3 rounded-3xl'>
                            <p className='flex gap-1 items-center text-zinc-700'><GiCook />{yearsOfExperiance} Years of experiance</p>
                            <p className='flex gap-1 items-center text-zinc-700'><FcLike />{likes} Likes</p>
                            <p className='flex gap-1 items-center text-zinc-700'><MdFastfood className='text-orange-600' />{numberOfRecipes} Recipes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefBanner;