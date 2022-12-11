import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer items-center py-8">
            <div className="items-center grid-flow-col">                
                <p className='text-lg'>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://web.facebook.com/themorshedctg" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className='text-2xl'></FaFacebook>
                </a>
                <a href="https://github.com/themorshed" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='text-2xl'></FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/themorshed" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className='text-2xl'></FaLinkedinIn>    
                </a>            
            </div>
        </footer>
    );
};

export default Footer;