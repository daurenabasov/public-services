import React from "react";
import s from "./Works.module.scss";
import card1 from "./Images/card1.png";
import card2 from "./Images/card2.png";
import card3 from "./Images/card3.png";
import card4 from "./Images/card4.png";

const Works = () => {
  const cards = [
    {
      image: card1,
      description:
        "Employees pay for out-of-pocket expenses using their Nibble Card",
    },
    {
      image: card2,
      description:
        "We pay the healthcare provider immediately on the employee's behalf",
    },
    {
      image: card3,
      description:
        "The employee selects a repayment plan & splits their expense into small, bite-sized installments",
    },
    {
      image: card4,
      description:
        "The employee repays Nibble over time. No interest or fees ever, and no credit checks",
    },
  ];

  return (
    <>
      <section className={s.Works}>
        <div className={s.wrapper} id="container">
          <div className={s.titles}>
            <h1>How it works</h1>
            <p>
              We pay your employees' healthcare bills, <br /> and they pay us
              back over time
            </p>

            <div className={s.cards__container}>
              {cards.map((el, id) => (
                <div key={id}>
                  <img src={el.image} alt="img" />
                  <p>{el.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
