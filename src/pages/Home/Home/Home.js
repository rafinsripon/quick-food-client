import React from 'react';
import useTitle from '../../../hooks/UseTitle';
import HomeService from '../../Services/HomeService';
import Banner from '../Banner/Banner';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <HomeService />
        </div>
    );
};

export default Home;