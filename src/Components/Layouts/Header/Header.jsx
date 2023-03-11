import React from "react";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header id={s.header}>
      <div className={s.header__wrapper} id="container">
        <div className={s.title__headerTop}>
          <span>Nibble Health is live!</span>
          <span>Contact us to book a demo and learn more</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
