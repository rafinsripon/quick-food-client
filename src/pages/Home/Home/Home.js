import React from 'react';
import useTitle from '../../../hooks/UseTitle';
import HomeService from '../../Services/HomeService';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Descover from '../Descover/Descover';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <HomeService />
            <About />
            <Descover />
        </div>
    );
};

export default Home;