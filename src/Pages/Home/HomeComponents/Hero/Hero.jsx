import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Hero.module.scss";
import Sidebar from "../../../.././Components/Layouts/Sidebar/Sidebar";

const Hero = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <section id={s.Hero}>
        <div className={s.wrapper} id="container">
          <div className={s.left__block}>
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
                <li><Link to="/questions">Вопросы</Link></li>
              </ul>
              <div className={s.burger}>
                <label htmlFor="check">
                  <input
                    type="checkbox"
                    id="check"
                    onClick={() => setShowNav(!showNav)}
                  />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
            </nav>
            <h1>
              Healthcare bills in <br /> small bites
            </h1>
            <p>
              Nibble Health eliminates financial barriers to <br /> healthcare
              for employees, allowing them to seek <br /> care when they truly
              need it
            </p>
            <div className={s.btns}>
              <button>Get in touch</button>
              <button>Download the app</button>
            </div>
          </div>
          <div className={s.right__block}></div>
        </div>
      </section>
      {showNav && <Sidebar show={!showNav} setShowNav={setShowNav} />}
    </>
  );
};

export default Hero;
