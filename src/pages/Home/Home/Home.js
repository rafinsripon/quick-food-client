import React from 'react';
import useTitle from '../../../hooks/UseTitle';
import HomeService from '../../Services/HomeService';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Descover from '../Descover/Descover';
import Feature from '../Feature/Feature';
import OrderFood from '../OrderFood/OrderFood';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <HomeService />
            <About />
            <Descover />
            <Feature />
            <OrderFood />
        </div>
    );
};

export default Home;