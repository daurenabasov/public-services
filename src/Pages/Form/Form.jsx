import React, { useEffect, useState } from "react";
import Header from "../../Components/Layouts/Header/Header";
import Footer from "../../Components/Layouts/Footer/Footer";
import s from "./Form.module.scss";
import axios from "axios";
import { API_FORMS } from "../../Constants/api";
import Nav from "../../Components/Layouts/Navigation/Nav";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text_form, setText_form] = useState("");
  const [data_time, setData_time] = useState("");
  const [history, setHistory] = useState([]);

  const handleSave = async (e) => {
    e.preventDefault();
    const res = await axios.post(API_FORMS, {
      name,
      email,
      text_form,
      data_time,
    });
    console.log(res.data);
  };
  return (
    <>
      <Header />
      <div id={s.form}>
        <div id="container">
          <Nav />
          <div className={s.hero}>
            <h1>Get Contact Us</h1>
            <form onSubmit={handleSave} className={s.formSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Введите имя"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                value={email}
                placeholder="Введите почту"
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* <input
                type="text"
                value={text_form}
                placeholder="Введите сообщение"
                onChange={(e) => setText_form(e.target.value)}
              /> */}
              <textarea
                value={text_form}
                placeholder="Введите сообщение"
                onChange={(e) => setText_form(e.target.value)}
              ></textarea>
              <input
                type="date"
                value={data_time}
                onChange={(e) => setData_time(e.target.value)}
              />
              <button>Отправить</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
