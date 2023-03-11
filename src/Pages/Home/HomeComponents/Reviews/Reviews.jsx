import React from "react";
import TopImage from "../../../../Assets/ReviewsTopImage.png";
import BottomImage from "../../../../Assets/ReviewsBottomImage.png";
import s from "./Reviews.module.scss";

const Reviews = () => {
  return (
    <section className={s.Reviews}>
      <div className={s.wrapper} id="container">
        <h1>Employers love Nibble Health</h1>
        <div className={s.topBlock}>
          <div className={s.text__container}>
            <h2>
              Nibble can be used by everyone on <br /> our diverse team
            </h2>
            <p>
              We've built a diverse team, so finding benefits that apply to{" "}
              <br />
              everyone is incredibly challenging. We've spent countless hours{" "}
              <br />
              onboarding vendors only to find that they apply to a small <br />{" "}
              portion of our workforce. We love Nibble Health because it <br />{" "}
              solves a universal problem and can be used across all groups of{" "}
              <br /> employees.
            </p>
          </div>
          <div className={s.img__container}>
            <img src={TopImage} alt="image" />
          </div>
        </div>
        <div className={s.bottomBlock}>
          <div className={s.img__container}>
            <img src={BottomImage} alt="image" />
          </div>
          <div className={s.text__container}>
            <h2>Nibble promotes financial security</h2>
            <p>
              There's a reason why financial wellness has become a core goal of{" "}
              <br />
              benefits selection. We now have the data to see that when <br />
              employees feel financially insecure, they're more likely to <br />
              underperform and look around for new jobs. Nibble helps promote{" "}
              <br />
              financial wellness among our employees and allows them to <br />
              accomplish their health goals without sacrificing their financial{" "}
              <br />
              goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
