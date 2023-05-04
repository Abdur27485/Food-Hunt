import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import ChefsCardContainer from '../../components/Chefs/ChefsCardContainer';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ChefsCardContainer></ChefsCardContainer>
            <Footer></Footer>
        </div>
    );
};

export default Home;