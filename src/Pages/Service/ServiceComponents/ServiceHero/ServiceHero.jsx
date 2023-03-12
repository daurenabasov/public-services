import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../../../Assets/AboutHeroImage.png";
import Nav from "../../../../Components/Layouts/Navigation/Nav"

import s from "./ServiceHero.module.scss";

const ServiceHero = () => {
  return (
    <section className={s.ServiceHero}>
      <div className={s.wrapper}>
        <div className={s.textHero}>
          <Nav />
          <h3>
            Наши сервисы 
          </h3>
          <p>
            Morphocode is a design and development firm that uses data to <br />
            visualize urban dynamics and provide location insights. Our team
            <br />
            brings together expertise across architecture, urban planning, and
            <br />
            software engineering.
          </p>
        </div>
        <div className={s.imageHero}>
          <img src={HeroImage} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
