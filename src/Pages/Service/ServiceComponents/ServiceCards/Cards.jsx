import React, { useEffect, useState } from "react";
import s from "./Cards.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_ESTABLISHNENTS } from "../../../../Constants/api";
import axios from "axios";

const Cards = ({ id, subtitle, photo, location }) => {
  const [getId, setGetId] = useState("");

  const fetchId = async () => {
    const res = axios.get(`${API_ESTABLISHNENTS}${getId}/`);

    setGetId(res.data);
  };

  useEffect(() => {
    fetchId();
  }, []);

  return (
    <div className={s.card}>
      <img src={photo} alt={subtitle} width={200} height={200} />
      <div>
        <h4>{subtitle}</h4>
        <p>{location}</p>
      </div>
      <Link to={`/service/${id}`}>Подробнее</Link>
    </div>
  );
};

export default Cards;
