import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../../../Assets/AboutHeroImage.png";

import s from "./ServiceHero.module.scss";

const ServiceHero = () => {
  return (
    <section className={s.ServiceHero}>
      <div className={s.wrapper} id="container">
        <div className={s.textHero}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/service"> Сервисы</Link>
              </li>
              <li>
                <Link to="/about">О нас</Link>
              </li>
              <li>
                <Link to="/form">Форма</Link>
              </li>
            </ul>
          </nav>
          <h3>
            Exploring cities <br /> through data analysis <br /> and
            visualization
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
