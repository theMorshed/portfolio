import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sections/Footer';
import Navbar from '../Sections/Navbar';

const MainLayout = () => {
    return (
        <div className='w-11/12 lg:w-7/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;