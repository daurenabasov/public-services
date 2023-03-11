import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "../Components/Layouts/Header/Header"
import Footer from "../Components/Layouts/Footer/Footer"
import Home from '../Pages/Home/Home';


const RoutesApp = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route />
                <Route />
            </Routes>
            <Footer />
        </>
    );
};

export default RoutesApp;