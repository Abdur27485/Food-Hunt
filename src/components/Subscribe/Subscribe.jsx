import React from 'react';
import { TiTick } from "react-icons/ti";
const Subscribe = () => {
    return (
        <div className='mt-20 mx-5 lg:mx-20 rounded-3xl newsletterBg'>
            <div className='bg-black bg-opacity-50 p-5 rounded-3xl grid grid-cols-1 lg:grid-cols-2 g-20'>
                <div className='lg:ml-20'>
                    <h2 className='text-white font-semibold text-3xl'>Subscribe to our newsletter</h2>
                    <div className='flex flex-col gap-3 ml-5 mt-5 text-gray-50 text-lg'>
                        <p className='flex items-center gap-1'><TiTick className=' text-white bg-green-500 rounded-full' /> New Recipes Every Week</p>
                        <p className='flex items-center gap-1'><TiTick className=' text-white bg-green-500 rounded-full' /> Tips and trick from our chefs</p>
                        <p className='flex items-center gap-1'><TiTick className=' text-white bg-green-500 rounded-full' /> Exclusive offers and discounts</p>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-5 lg:mt-0'>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="example@gmail.com" className="input input-bordered" />
                            <button className="btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;