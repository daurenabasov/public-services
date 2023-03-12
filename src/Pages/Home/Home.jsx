import React from 'react';
import s from "./Home.module.scss"
import Hero from './HomeComponents/Hero/Hero';
import Feature from './HomeComponents/Feature/Feature';
import EmployersSection from './HomeComponents/EmployersSection/EmployersSection';
import Works from './HomeComponents/Works/Works';
import Reviews from './HomeComponents/Reviews/Reviews';
import Header from '../../Components/Layouts/Header/Header';
import Footer from '../../Components/Layouts/Footer/Footer';


const Home = () => {
    return (

        <>
            <Header />
            <main>
                <Hero />
                <Feature />
                <EmployersSection />
                <Works />
                <Reviews />
            </main>
            <Footer />
        </>

    );
};

export default Home;