import React from 'react';
import resale_furniture_image from '../assets/images/resale_furniture.png';
import psychologist_image from '../assets/images/psychologist.png';
import programming_school_image from '../assets/images/programming_school.png';

const Projects = () => {
    return (
        <div className='my-20'>
            <header className='ml-3'>
                <h4 className='text-xl text-blue-900 font-semibold uppercase'>Portfolio</h4>
                <h2 className='text-3xl font-bold uppercase mt-2'>Featured Works</h2>
            </header>
            <div className="mt-10 ml-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={resale_furniture_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Resale Furniture
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Used Product Sales Application. You can advertise your used product for resale and also you can buy old product.</p>
                            <div className="card-actions justify-end">                                
                                <div className="badge badge-outline">View More</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={psychologist_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Psychologist - Portfolio
                            </h2>
                            <p>This is Portfolio Application where you can showcase your service and product.</p>
                            <div className="card-actions justify-end">                                
                                <div className="badge badge-outline">View More</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={programming_school_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Programming School
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>This is LMS(Learning Management Service) Application by which you can enrich your skills and knowledge.</p>
                            <div className="card-actions justify-end">                                
                                <div className="badge badge-outline">View More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;