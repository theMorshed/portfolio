import React from 'react';
import About from '../Sections/About';
import Contact from '../Sections/Contact';
import Footer from '../Sections/Footer';
import Projects from '../Sections/Projects';

const Home = () => {
    return (
        <div>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;