import React from "react";
import EmployersArrow from "../../../../Assets/EmployersArrow.png";
import EmployersCard from "../../../../Assets/EmployersCard.png";
import EmployersHeart from "../../../../Assets/EmployersHeart.png";
import EmployersShield from "../../../../Assets/EmployersShield.png";
import EmployersImage from "../../../../Assets/EmployersImage.png";
import s from "./EmployersSection.module.scss";

const EmployersSection = () => {
  return (
    <section className={s.EmployersSection}>
      <div className={s.wrapper} id="container">
        <div className={s.image__block}>
          <h4>
            Why employers <br /> choose our
          </h4>
        </div>
        <div className={s.info}>
          <div className={s.info__block}>
            <img src={EmployersCard} alt="" width="60px" height="60px" />
            <div className={s.titles}>
              <h6>
                Lower Corporate <br /> Healthcare Costs
              </h6>
              <p>
                Help employees shift to more cost-effective <br /> health plans
                now that they have a deductible <br /> safety net
              </p>
            </div>
          </div>
          <div className={s.info__block}>
            <img src={EmployersHeart} alt="" width="60px" height="60px" />
            <div className={s.titles}>
              <h6>
                Lower Corporate <br /> Healthcare Costs
              </h6>
              <p>
                Help employees shift to more cost-effective <br /> health plans
                now that they have a deductible <br /> safety net
              </p>
            </div>
          </div>{" "}
          <div className={s.info__block}>
            <img src={EmployersArrow} alt="" width="60px" height="60px" />
            <div className={s.titles}>
              <h6>
                Lower Corporate <br /> Healthcare Costs
              </h6>
              <p>
                Help employees shift to more cost-effective <br /> health plans
                now that they have a deductible <br /> safety net
              </p>
            </div>
          </div>{" "}
          <div className={s.info__block}>
            <img src={EmployersShield} alt="" width="60px" height="60px" />
            <div className={s.titles}>
              <h6>
                Lower Corporate <br /> Healthcare Costs
              </h6>
              <p>
                Help employees shift to more cost-effective <br /> health plans
                now that they have a deductible <br /> safety net
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default EmployersSection;
