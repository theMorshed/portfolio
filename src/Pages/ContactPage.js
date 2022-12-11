import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../Sections/Contact';

const ContactPage = () => {
    return (
        <div>
            <Helmet>
                <title>Manjur Morshed - Contact</title>
            </Helmet>
            <Contact></Contact>
        </div>
    );
};

export default ContactPage;