import React from 'react';
import portfolio_image from '../assets/images/portfolio_picture.png';

const About = () => {
    return (
        <div className='my-16'>
            <h4 className='text-xl text-blue-900 font-semibold uppercase'>Biography</h4>
            <h2 className='text-3xl font-bold uppercase mt-2'>About Me</h2>
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={portfolio_image} className="rounded-lg shadow-2xl w-1/3 h-[500px]" alt="portflio" />
                    <div className='w-2/3'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;