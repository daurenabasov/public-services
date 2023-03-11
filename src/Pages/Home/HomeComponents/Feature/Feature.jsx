import React from "react";
import s from "./Feature.module.scss";
import featureTitle from "../../../../Assets/featureTitle.png";
import peopleIcon from "./Images/people.png";
import phoneIcon from "./Images/phone.png";

const Feature = () => {
  return (
    <section className={s.Feature} id="container">
      <h2 className={s.FeatureTitle}>
        <img src={featureTitle} alt="img" />
      </h2>

      <div className={s.blocks}>
        <div className={s.left__block}>
          <h3>
            Nibble is a healthcare safety <br /> net for your team members
          </h3>
          <ul>
            <li>
              Line of credit for employees to pay for healthcare <br /> expenses
              in installments over time
            </li>
            <li>No fees or interest ever</li>
            <li>
              Empowers employees to seek care without <br /> worrying about
              paying all at once
            </li>
            <li>
              <img src={phoneIcon} alt="img" />
              <span>
                Can be used at any medical provider where <br /> Visa is
                accepted, regardless of network
              </span>
            </li>
            <li>
              <img src={peopleIcon} alt="img" />
              <span>
                Helps employees stay healthy while keeping <br /> their
                financial goals intact
              </span>
            </li>
          </ul>
        </div>
        <div className={s.right__block}></div>
      </div>
    </section>
  );
};

export default Feature;
