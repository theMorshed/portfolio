import React from 'react';
import resale_furniture_image from '../assets/images/resale_furniture_one.png';
import psychologist_image from '../assets/images/psychologist_one.png';
import programming_school_image from '../assets/images/programming_one.png';
import { Link } from 'react-router-dom';

const projectsData = [
    {
        id: 1,
        name: 'Resale Furniture',
        image: resale_furniture_image,
        desc: 'Used Product Sales Application. You can advertise your used product for resale and also you can buy old product.',
        details: 'Resale Furniture is a Web Application for sale your used furniture. There is a seller and buyer role for user. Buyer can buy product and seller can sell their product and advertise it. This is an MERN stack Application which i made using React js, Express, Node and Mongodb.'
    },
    {
        id: 2,
        name: 'Psychologist - Portfolio',
        image: psychologist_image,
        desc: 'This is Portfolio Application where you can showcase your service and product.',
        details: 'Resale Furniture is a Web Application for sale your used furniture. There is a seller and buyer role for user. Buyer can buy product and seller can sell their product and advertise it. This is an MERN stack Application which i made using React js, Express, Node and Mongodb.'
    },
    {
        id: 3,
        name: 'Programming School',
        image: programming_school_image,
        desc: 'This is LMS(Learning Management Service) Application by which you can enrich your skills and knowledge.',
        details: 'Resale Furniture is a Web Application for sale your used furniture. There is a seller and buyer role for user. Buyer can buy product and seller can sell their product and advertise it. This is an MERN stack Application which i made using React js, Express, Node and Mongodb.'
    }
];

const Projects = () => {
    return (
        <div className='my-20'>
            <header className='ml-3'>
                <h4 className='text-xl text-blue-900 font-semibold uppercase'>Portfolio</h4>
                <h2 className='text-3xl font-bold uppercase mt-2'>Featured Works</h2>
            </header>
            <div className="mt-10 ml-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projectsData.map(project => 
                            <div className="card bg-base-100 shadow-xl" key={project.id}>
                                <figure><img src={project.image} alt={project.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {project.name}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{project.desc}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/project/${project.id}`} className="badge badge-outline">View More</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }                    
                </div>
            </div>
        </div>
    );
};

export default Projects;