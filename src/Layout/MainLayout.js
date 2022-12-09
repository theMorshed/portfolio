import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Sections/Navbar';

const MainLayout = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;