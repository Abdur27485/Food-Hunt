import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactStars from "react-rating-stars-component";

const RecipeCard = ({ data }) => {
    const { recipeName, ingredients, cookingMethod, rating, recipeImage } = data;

    const notify = (event) => {
    event.target.disabled= true;
        return toast('Added To Favourite.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
    return (
        <div className="rounded-xl border bg-slate-200 border-slate-400 p-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="grid-cols-1 lg:col-span-3 overflow-hidden">
                    <div className="flex items-center h-[300px] overflow-hidden">
                        <img src={recipeImage} className='w-full h-full' />
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-9">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-zinc-700">{recipeName}</h2>
                        <p className="mt-2"><ReactStars value={rating} edit={false} size={20} /></p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-7 lg:grid-cols-2 text-center lg:text-left">
                        <div className='lg:mr-6'>
                            <p className="font-bold text-zinc-700 flex gap-1 flex-wrap">
                                <span className='text-blue-500'>Ingredients: </span>
                                {
                                    ingredients.map((ingredient, idx) => <span key={idx}>{ingredient},</span>)
                                }
                            </p>
                        </div>

                        <div>
                            <p className="font-bold text-zinc-700">
                                <span className='text-blue-500'>How to cook: </span>
                                {cookingMethod.length > 350 ? <> {cookingMethod.slice(0, 350)}... </> : cookingMethod}
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className=" w-2/3 mx-auto block text-center rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white disabled:bg-blue-300" onClick={notify}>Add To Favourite</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RecipeCard;