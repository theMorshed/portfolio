import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../Sections/About';

const AboutPage = () => {
    return (
        <div>
            <Helmet>
                <title>Manjur Morshed - About</title>
            </Helmet>
            <About></About>
        </div>
    );
};

export default AboutPage;