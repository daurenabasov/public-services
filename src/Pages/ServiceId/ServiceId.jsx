import React, { useEffect, useState } from "react";
import s from "./ServiceId.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_ESTABLISHNENTS } from "../../Constants/api";
import FormId from "./FormId/FormId";

const ServiceId = () => {
  const { id } = useParams();

  const [getId, setGetId] = useState({});

  const fetchId = async () => {
    const res = await axios.get(`${API_ESTABLISHNENTS}${id}/`);
    setGetId(res.data);
  };
  console.log(getId);
  useEffect(() => {
    fetchId();
  }, []);

  return (
    <>
    
      <div className={s.category}>
        {id}
        {getId.title}
        {getId.subtitle}

        <FormId />
      </div>
    </>
  );
};

export default ServiceId;
