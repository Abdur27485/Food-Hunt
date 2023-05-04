import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="flex flex-col lg:w-9/12">
                    <img className='' src="/public/assets/notFound.jpg" alt="" />
                        <h1 className="text-5xl font-bold text-slate-800">Page Not Found</h1>
                        <div><Link to='/' className="btn mt-6">Go Home</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;