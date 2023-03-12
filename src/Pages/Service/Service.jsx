import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_ESTABLISHNENTS } from "../../Constants/api";
import s from "./Service.module.scss";
import Cards from "./ServiceComponents/ServiceCards/Cards";
import ServiceHero from "./ServiceComponents/ServiceHero/ServiceHero";
import Header from "../../Components/Layouts/Header/Header";
import Footer from "../../Components/Layouts/Footer/Footer";
import Loader from "../../Components/UI/Loader"

const Service = () => {
  const [establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  }, [])


  const getEstablishments = async () => {
    const res = await axios.get(API_ESTABLISHNENTS);
    setEstablishments(res.data);
  };

  useEffect(() => {
    getEstablishments();
  }, []);

  return (
    <>
      <Header />
      <main id="container" className={s.ServiceContainer}>
        <ServiceHero />
        <div className={s.cards}>
          {
            loading ? (
              establishments.map((data) => (
                <Cards
                  key={data.id}
                  id={data.id}
                  subtitle={data.subtitle}
                  photo={data.photo}
                  location={data.location}
                />
              ))
            ) : (<Loader />)
          }
        </div>
      </main>
      <Footer />
    </>

  );
};

export default Service;
