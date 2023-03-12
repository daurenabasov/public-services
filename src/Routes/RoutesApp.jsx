import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Layouts/Header/Header";
import Footer from "../Components/Layouts/Footer/Footer";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service"
import Form from "../Pages/Form/Form";
import ServiceId from "../Pages/ServiceId/ServiceId";
import Questions from "../Pages/Questions/Questions";

const RoutesApp = () => {




  return (
    <>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/form" element={<Form />} />
        <Route path="/service/:id" element={<ServiceId />} />
        <Route path="/questions" element={<Questions /> }/>


      </Routes>
    </>
  );
};

export default RoutesApp;
