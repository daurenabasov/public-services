import React, { useEffect, useState } from "react";
import Header from "../../Components/Layouts/Header/Header";
import Footer from "../../Components/Layouts/Footer/Footer";
import Nav from "../../Components/Layouts/Navigation/Nav";
import s from "./Questions.module.scss";
import axios from "axios";
import { API_QA } from "../../Constants/api";
import { Collapse } from "antd";
const { Panel } = Collapse;

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const onChange = (key) => {
    console.log(key);
  };

  const getQuestions = async () => {
    const res = await axios.get(API_QA);
    setQuestions(res.data);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <Header />
      <main id="container">
        <Nav />
        <div className={s.wrapper}>
          <div className={s.hero__Text}>
            <h1>
              We research, design, <br /> and develop
            </h1>
            <p>
              Our portfolio ranges from interactive web maps and <br />{" "}
              information graphics to custom software tools for data analysis
              and <br />
              visualization.
            </p>
          </div>
          <div className={s.hero__image}></div>
        </div>
        <div className={s.cards}>
          {questions.map((el) => (
            <Collapse
              defaultActiveKey={[""]}
              onChange={onChange}
              style={{ background: "#001414", color: "white" }}
            >
              <Panel
                header={<span className={s.question}>{el.question}</span>}
                key="1"
                style={{ color: "white" }}
              >
                <p>{el.answer}</p>
              </Panel>
            </Collapse>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Questions;
