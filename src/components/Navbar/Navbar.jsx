import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaHome } from "react-icons/fa";
import { ImPencil2 } from "react-icons/im";
import { FiLogIn } from "react-icons/fi";


const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser();
    }
    return (
        <div>
            <div className="navbar bg-base-100 md:w-9/12 mx-auto">
                <div className="navbar-start">
                    <h2 className='font-bold text-2xl'>Food Hunt</h2>
                </div>
                <div className="navbar-center hidden lg:flex gap-x-5">
                    <Link to='/' className='flex items-center gap-x-1 hover:bg-slate-300 rounded p-1'><FaHome /> Home</Link>
                    <Link to='/blog' className='flex items-center gap-x-1 hover:bg-slate-300 rounded p-1'><ImPencil2 /> Blog</Link>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="avatar tooltip tooltip-left" data-tip={user.displayName}>
                                <div className=" w-16 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <button className="btn ms-3" onClick={handleLogOut}>Log Out</button>
                        </>
                            :
                            <Link to='/login'  className='flex items-center gap-x-1 hover:bg-slate-300 rounded p-1'><FiLogIn />Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;