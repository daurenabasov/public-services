import React from "react";
import s from "./About.module.scss";
import Header from "../../Components/Layouts/Header/Header";
import Footer from "../../Components/Layouts/Footer/Footer";
import Nav from "../../Components/Layouts/Navigation/Nav";

const About = () => {
  return (
    <>
      <Header />
      <main className={s.container}>
        <div className={s.navigation}>
          <Nav styleLink={{ color: "#fff" }} />
        </div>
        <div className={s.wrapper} id="container">
          <div className={s.card}>
            <div className={s.cardBlock}>
              <h1>О нас</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className={s.cardBlock}>
              <h1>Что мы делаем?</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className={s.cardBlock}>
              <h1>Мы</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer stylesFooter={{ margin: "0" }} />
    </>
  );
};

export default About;
