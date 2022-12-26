import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import Topbar from '../Topbar/Topbar';

const Home = () => {
    return (
        <div>
        <Topbar></Topbar>
        <Banner></Banner>
        <Navbar></Navbar>
        <Products></Products>
        </div>
    );
};

export default Home;