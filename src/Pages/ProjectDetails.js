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
        details: 'Resale Furniture is a Web Application for sale your used furniture. There is a seller and buyer role for user. Buyer can buy product and seller can sell their product and advertise it. This is an MERN stack Application which i made using React js, Express, Node and Mongodb.',
        features: ['Resale furniture Ecommerce', 'Full Responsive (mobile, tablet, desktop view)', 'Beautiful UI/UX', 'Header and awesome navbar and footer', 'Full functional Dashboard', 'Full feature role management(seller, buyer and admin)', 'Firebase Authentication and Blog page'],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'React Query', 'Axios', 'React Router Dom', 'React Hot Toast', 'Firebase', 'Daisy UI', 'Tailwind CSS', 'Express JS', 'Node JS']
    },
    {
        id: 2,
        name: 'Psychologist - Portfolio',
        images: [psychology_one, psychology_two, psychology_three],
        desc: 'This is Portfolio Application where you can showcase your service and product.',
        details: 'Psychologist is a Portfolio Web Application for display and sale a specific personell. You can showcase your service with this application and give a superb treatment to patient.',
        features: ['Full Responsive (mobile, tablet, desktop view)', 'Header with navigation and stylish footer', 'Private Router and Mobile menu Added for better UI', 'Third party login system', 'Firebase Authentication', 'Blog page'],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'React Photo View', 'React Router Dom', 'React Hot Toast', 'Firebase', 'Daisy UI', 'Tailwind CSS', 'Express JS', 'Node JS']
    },
    {
        id: 3,
        name: 'Programming School',
        images: [programming_one, programming_two, programming_three],
        desc: 'This is LMS(Learning Management Service) Application by which you can enrich your skills and knowledge.',
        details: 'Programming School is Learning Management Application Created with MERN Stack. You can buy or sale your course by this website. Authentication is the important part of this application, you can not buy a course without registration.',
        features: ['Firebase Authentication', 'Responsiveness(mobile, tablet, desktop view)', 'Header with navigation, footer and content', 'Private Route and Courses', 'Hambarger Menu and Third party login system', 'Reset Password functionality', 'Blog, courses pages with attractive content'],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'React to Pdf', 'React Router Dom', 'React Hot Toast', 'Firebase', 'Daisy UI', 'Tailwind CSS', 'Express JS', 'Node JS']
    }
];

const ProjectDetails = () => {
    const { id } = useParams();
    const singleProject = projectsData.find(project => project.id == id);

    return (
        <div className='my-20'>
            <header className='ml-3'>
                <h4 className='text-2xl font-semibold uppercase'>Screenshot of {singleProject.name}</h4>
            </header>
            <div className="mt-10 ml-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        singleProject.images.map(image => <figure key={image}><img src={image} alt='project' /></figure>)
                    }
                </div>
                <div className='my-10'>
                    <h2 className='text-4xl text-blue-900 font-semibold'>{singleProject.name}</h2>
                    <p className='text-xl mt-4'>{singleProject.details}</p>
                    <p className='text-2xl font-semibold mt-4 mb-2'>Features:</p>
                    <ul className='list-disc ml-10'>
                        {
                            singleProject.features.map(feature => <li key={feature} className='text-lg'>{feature}</li>)
                        }
                    </ul>
                    <p className='text-2xl font-semibold mt-4 mb-2'>Technologies:</p>
                    <div className='ml-10'>
                        {
                            singleProject.technologies.map(technology => <p key={technology} className='badge badge-outline mr-2 mb-2 text-lg p-3 text-blue-900 font-semibold'>{technology}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;