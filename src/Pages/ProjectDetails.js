import React from 'react';
import { useParams } from 'react-router-dom';
import furniture_one from '../assets/images/resale_furniture_one.png';
import furniture_two from '../assets/images/resale_furniture_two.png';
import furniture_three from '../assets/images/resale_furniture_three.png';
import psychology_one from '../assets/images/psychologist_one.png';
import psychology_two from '../assets/images/psychologist_two.png';
import psychology_three from '../assets/images/psychologist_three.png';
import programming_one from '../assets/images/programming_one.png';
import programming_two from '../assets/images/programming_two.png';
import programming_three from '../assets/images/programming_three.png';

const projectsData = [
    {
        id: 1,
        name: 'Resale Furniture',
        images: [furniture_one, furniture_two, furniture_three],
        desc: 'Used Product Sales Application. You can advertise your used product for resale and also you can buy old product.',
        details: 'Resale Furniture is a Web Application for sale your used furniture. There is a seller and buyer role for user. Buyer can buy product and seller can sell their product and advertise it. This is an MERN stack Application which i made using React js, Express, Node and Mongodb.'
    },
    {
        id: 2,
        name: 'Psychologist - Portfolio',
        images: [psychology_one, psychology_two, psychology_three],
        desc: 'This is Portfolio Application where you can showcase your service and product.',
        details: 'Psychologist is a Portfolio Web Application for display and sale a specific personell. You can showcase your service with this application and give a superb treatment to patient.'
    },
    {
        id: 3,
        name: 'Programming School',
        images: [programming_one, programming_two, programming_three],
        desc: 'This is LMS(Learning Management Service) Application by which you can enrich your skills and knowledge.',
        details: 'Programming School is Learning Management Application Created with MERN Stack. You can buy or sale your course by this website. Authentication is the important part of this application, you can not buy a course without registration.'
    }
];

const ProjectDetails = () => {
    const { id } = useParams();
    const singleProject = projectsData.find(project => project.id == id);
    console.log(singleProject);

    return (
        <div className='my-20'>
            <header className='ml-3'>
                <h4 className='text-2xl font-semibold uppercase'>Screenshot of {singleProject.name}</h4>
            </header>
            <div className="mt-10 ml-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <div className="card bg-base-100 shadow-xl"> */}
                        {
                            singleProject.images.map(image => <figure key={image}><img src={image} alt='project' /></figure>)
                        }
                        {/* <div className="card-body">
                            <h2 className="card-title">
                                {singleProject.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{singleProject.details}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/project/${project.id}`} className="badge badge-outline">View More</Link>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
                <div className='my-10'>
                    <h2 className='text-4xl text-blue-900 font-semibold'>{singleProject.name}</h2>
                    <p className='text-xl mt-4'>{singleProject.details}</p>
                    <p className='text-2xl font-semibold mt-4 mb-2'>Features:</p>
                    <ul className='list-disc ml-10'>
                        <li className='text-lg'>first</li>
                        <li className='text-lg'>second</li>
                        <li className='text-lg'>third</li>
                    </ul>
                    <p className='text-2xl font-semibold mt-4 mb-2'>Technologies:</p>
                    <div className='ml-10'>
                        <p className='badge badge-outline mr-2 text-lg p-3 text-blue-900 font-semibold'>HTML5</p>
                        <p className='badge badge-outline mr-2 text-lg p-3 text-blue-900 font-semibold'>CSS3</p>
                        <p className='badge badge-outline mr-2 text-lg p-3 text-blue-900 font-semibold'>JavaScript</p>
                        <p className='badge badge-outline mr-2 text-lg p-3 text-blue-900 font-semibold'>Node JS</p>
                        <p className='badge badge-outline mr-2 text-lg p-3 text-blue-900 font-semibold'>Express</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;