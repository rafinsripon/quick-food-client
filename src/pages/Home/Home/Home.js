import React from 'react';
import HomeService from '../../Services/HomeService';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            {/* <Services /> */}
            <HomeService />
        </div>
    );
};

export default Home;