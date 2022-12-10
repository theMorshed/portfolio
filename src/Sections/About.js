import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import portfolio_image from '../assets/images/portfolio_picture.png';

const About = () => {
    return (
        <div className='my-16'>
            <header className='ml-3'>
                <h4 className='text-xl text-blue-900 font-semibold uppercase'>Biography</h4>
                <h2 className='text-3xl font-bold uppercase mt-2'>About Me</h2>
            </header>
            <div className="mt-5">
                <div className="hero-content flex-col lg:flex-row items-start">
                    <img src={portfolio_image} className="rounded-lg shadow-2xl lg:w-1/3 h-[500px]" alt="portflio" />
                    <div className='w-full lg:w-2/3 lg:ml-10'>
                        <h1 className="text-3xl font-semibold text-blue-900">
                            <TypewriterComponent options={{
                                strings: ["This is Morshed and I'm a Full Stack Developer"],
                                autoStart: true,
                                loop: true,
                            }}></TypewriterComponent>                        
                        </h1>
                        <p className="py-6 text-lg">Hi! My name is <span className='text-blue-900 font-semibold'>Manjur Morshed</span>. I am a MERN Stack Developer, and I'm very passionate and dedicated to my work. As a professional developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                        <div className='xl:flex justify-between text-lg'>
                            <div>
                                <p className='my-2'><strong>Location:</strong> Chattogram, Bangladesh</p>
                                <p className='my-2'><strong>Study:</strong> University of Chittagong</p>
                                <p className='my-2'><strong>Mail:</strong> themorshedctg@gmail.com</p>
                                <p className='my-2'><strong>Github:</strong> https://github.com/themorshed</p>
                            </div>
                            <div>
                                <p className='my-2'><strong>Interests:</strong> Problem Solving</p>
                                <p className='my-2'><strong>Degree:</strong> Bechelor of Science</p>
                                <p className='my-2'><strong>Phone:</strong> +880-1825279798</p>
                            </div>
                        </div>
                        <a className="btn btn-primary bg-blue-900 mt-5" href="https://drive.google.com/file/d/13oUowEpmnyZmtkPdcg5L7M29VKd63FZ1/view?usp=share_link" target="_blank">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;