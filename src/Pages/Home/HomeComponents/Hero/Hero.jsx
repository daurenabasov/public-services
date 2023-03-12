import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import s from "./Hero.module.scss";

import Sidebar from "../../../.././Components/Layouts/Sidebar/Sidebar";
import Nav from "../../../../Components/Layouts/Navigation/Nav"

const Hero = () => {
  const [showNav, setShowNav] = useState(false);

  const navigate = useNavigate()

  const getForm = () => {
    navigate("/form")
  }

  return (
    <>
      <section id={s.Hero}>
        <div className={s.wrapper} id="container">
          <div className={s.left__block}>
            <Nav />
            <h1>
              Healthcare bills in <br /> small bites
            </h1>
            <p>
              Nibble Health eliminates financial barriers to <br /> healthcare
              for employees, allowing them to seek <br /> care when they truly
              need it
            </p>
            <div className={s.btns}>
              <button onClick={getForm}>Get in touch</button>
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
