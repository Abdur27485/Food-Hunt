import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 md:w-9/12 mx-auto">
                <div className="navbar-start">
                    <h2 className='font-bold text-2xl'>Recipe</h2>
                </div>
                <div className="navbar-center hidden lg:flex gap-x-5">
                    <p>Home</p>
                    <p>Blog</p>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className=" w-16 rounded-full">
                            <img src="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw" />
                        </div>
                    </div>
                    <a className="btn px-9">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;