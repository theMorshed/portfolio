import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li><a href="/">About</a></li>        
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
    </>;

    return (
        <div className="navbar bg-base-100 py-6">
            <div className="navbar-start">
                <Link to='/' className="text-xl font-bold uppercase text-blue-900">
                    <span>Morshed</span>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0">
                        {menuItem}
                    </ul>
                </div>
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;