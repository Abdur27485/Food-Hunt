import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import ChefsCardContainer from '../../components/Chefs/ChefsCardContainer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ChefsCardContainer></ChefsCardContainer>
        </div>
    );
};

export default Home;