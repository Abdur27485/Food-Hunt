import React from 'react';

const ChefCard = ({data}) => {
    const {chefName,numberOfRecipes,yearsOfExperiance,likes} = data;

    console.log(chefName)
    return (
        <div className="card glass bg-base-100 shadow-xl">
            <figure><img className='w-full' src="https://images.hellomagazine.com/horizon/43/3ee129054e2c-gettyimages-827452536.jpg" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">{chefName}</h2>
                <p className='text-center'>{yearsOfExperiance} <span className='text-primary'>years of Expriance</span></p>
                <div className='grid grid-cols-2 text-center mt-7'>
                    <p>{numberOfRecipes}</p>
                    <p>{likes}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full mt-5">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;