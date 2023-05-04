import React from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { MdFastfood } from "react-icons/md";
import { GiCook } from "react-icons/gi";

const ChefCard = ({data}) => {
    const {chefName,numberOfRecipes,yearsOfExperiance,likes, id,chefPictureUrl} = data;

    return (

  <div className="rounded-xl border bg-slate-100 border-slate-400 p-6">
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div className="grid-cols-1 lg:col-span-3">
        <div className="mx-auto flex items-center justify-center">
            <img src={chefPictureUrl} className='card-image rounded-full' />
        </div>
      </div>

      <div className="col-span-1 lg:col-span-9">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold text-zinc-700">{chefName}</h2>
          <p className="mt-2 font-semibold text-zinc-700 flex gap-1 items-center"><GiCook />{yearsOfExperiance} Years of experiance</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-1 text-center lg:text-left">
          <div>
            <p className="font-bold text-zinc-700 flex gap-1 items-center"><FcLike /> {likes} likes</p>
          </div>

          <div>
            <p className="font-bold text-zinc-700 flex gap-1 items-center"><MdFastfood className='text-orange-600' />{numberOfRecipes} Recipes</p>
          </div>
        </div>

        <div className="mt-6">
          <Link to={`/chefs/${id}`} className=" w-2/3 mx-auto block text-center rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">View Recipes</Link>
        </div>
      </div>
    </div>
  </div>
    );
};

export default ChefCard;