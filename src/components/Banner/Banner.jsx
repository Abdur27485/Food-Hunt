import React from 'react';

const Banner = () => {
    return (
        <div className='hero-section'>
            <div className="hero min-h-screen bg-base-200 bg-opacity-10 mb-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/public/assets/homeHero/hero-img.jpg" className="max-w-sm lg:max-w-lg lg:ms-8 rounded-3xl shadow" />
                    <div>
                        <h1 className="text-5xl lg:text-7xl font-bold uppercase">Life is short, make it <span className='text-orange-500'>juicy</span> & <span className='text-yellow-600'>tender</span>.</h1>
                        <p className="py-6 text-slate-950 font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <a href="#chefs" className='font-bold bg-slate-200 hover:bg-slate-300 rounded px-10 py-5 mt-6 inline-block'>Explore Now !</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;