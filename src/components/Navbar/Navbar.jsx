import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaHome } from "react-icons/fa";
import { ImPencil2 } from "react-icons/im";
import { FiLogIn } from "react-icons/fi";


const Navbar = () => {
    const { user, logOutUser,nameAndPic } = useContext(AuthContext);
    console.log(nameAndPic)

    const handleLogOut = () => {
        logOutUser();
    }
    return (
        <div>
            <div className="navbar bg-base-100 md:w-9/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/' className='flex items-center gap-x-1 hover:bg-slate-300 rounded p-1'>
                                <FaHome /> Home
                            </NavLink>
                            <NavLink to='/blog' className='flex items-center gap-x-1 hover:bg-slate-300 rounded p-1'>
                                <ImPencil2 /> Blog
                            </NavLink>
                        </ul>
                    </div>
                    <h2 className='font-bold text-2xl'>Food Hunt</h2>
                </div>
                <div className="navbar-center hidden lg:flex gap-x-5">
                    <NavLink to='/' className='flex items-center gap-x-1 hover:bg-slate-300 rounded p-1'><FaHome /> Home</NavLink>
                    <NavLink to='/blog' className='flex items-center gap-x-1 hover:bg-slate-300 rounded p-1'><ImPencil2 /> Blog</NavLink>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="avatar tooltip tooltip-left" data-tip={user.displayName}>
                                <div className=" w-16 rounded-full">
                                    <img src={user.photoURL ? user.photoURL : 'https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0='} />
                                </div>
                            </div>
                            <button className="btn ms-3" onClick={handleLogOut}>Log Out</button>
                        </>
                            :
                            <Link to='/login' className='flex items-center gap-x-1 hover:bg-slate-300 rounded p-1'><FiLogIn />Login</Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;