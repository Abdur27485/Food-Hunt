import React, { Suspense } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import ChefsCardContainer from '../../components/ChefsCardContainer/ChefsCardContainer';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import RecipeCategories from '../../components/RecipeCategories/RecipeCategories';
import Subscribe from '../../components/Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefsCardContainer></ChefsCardContainer>
            <RecipeCategories></RecipeCategories>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;