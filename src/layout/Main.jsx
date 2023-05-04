import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { Suspense } from 'react';
import Loading from '../components/Loading/Loading';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;