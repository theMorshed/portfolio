import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../Sections/About';
import Contact from '../Sections/Contact';
import Projects from '../Sections/Projects';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Manjur Morshed - Portfolio</title>
            </Helmet>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;