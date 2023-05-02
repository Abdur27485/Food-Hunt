import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser();
    }
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
                    {
                        user ? <>
                            <div className="avatar tooltip tooltip-left" data-tip={user.displayName}>
                                <div className=" w-16 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <div className="btn ms-3" onClick={handleLogOut}>Log Out</div>
                        </>
                            :
                            <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;