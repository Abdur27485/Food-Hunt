import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import ChefsCardContainer from '../../components/Chefs/ChefsCardContainer';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefsCardContainer></ChefsCardContainer>
        </div>
    );
};

export default Home;