import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Layouts/Header/Header";
import Footer from "../Components/Layouts/Footer/Footer";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service"
import Form from "../Pages/Form/Form";

const RoutesApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesApp;
