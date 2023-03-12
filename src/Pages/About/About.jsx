import React from "react";
import s from "./About.module.scss";
import Header from "../../Components/Layouts/Header/Header";
import Footer from "../../Components/Layouts/Footer/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />
      <main className={s.container} id="container">
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
        <div className={s.info}>
          <h1>
            Every person who safely <br /> transitions back to the <br />{" "}
            community is a step <br /> toward a better society.
          </h1>
          <p>
            Criminal justice leaders use Recidiviz to get a real-time picture{" "}
            <br /> of their system, diagnose issues, and drive meaningful <br />{" "}
            changes.
          </p>
        </div>
        <div className={s.card}>
          <div className={s.first}>
            <h1>О нас</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className={s.second}>
            <h1>Что мы делаем?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className={s.third}>
            <h1>Мы</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
