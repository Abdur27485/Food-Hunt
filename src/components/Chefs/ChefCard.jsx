import React from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { MdFastfood } from "react-icons/md";

const ChefCard = ({data}) => {
    const {chefName,numberOfRecipes,yearsOfExperiance,likes, id,chefPictureUrl} = data;

    console.log(chefName)
    return (

  <div class="rounded-xl border bg-slate-100 border-slate-400 p-6">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div class="grid-cols-1 lg:col-span-3">
        <div class="mx-auto flex items-center justify-center">
            <img src={chefPictureUrl} className='card-image rounded-full' />
        </div>
      </div>

      <div class="col-span-1 lg:col-span-9">
        <div class="text-center lg:text-left">
          <h2 class="text-2xl font-bold text-zinc-700">{chefName}</h2>
          <p class="mt-2 font-semibold text-zinc-700">{yearsOfExperiance} Years of experiance</p>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-1 text-center lg:text-left">
          <div>
            <p class="font-bold text-zinc-700 flex gap-1 items-center"><FcLike /> {likes} likes</p>
          </div>

          <div>
            <p class="font-bold text-zinc-700 flex gap-1 items-center"><MdFastfood className='text-orange-600' />{numberOfRecipes}</p>
          </div>
        </div>

        <div class="mt-6">
          <Link to={`/chefs/${id}`} class=" w-2/3 mx-auto block text-center rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">View Profile</Link>
        </div>
      </div>
    </div>
  </div>
    );
};

export default ChefCard;