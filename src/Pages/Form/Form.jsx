import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd';
import Header from '../../Components/Layouts/Header/Header';
import Footer from '../../Components/Layouts/Footer/Footer';
import s from './Form.module.scss';
import { Link } from 'react-router-dom';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rnkeocu', 'template_cxwrf3v', form.current, 'rVxs1omlSkc0Q3S1P')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
      style: {
        marginTop: '100px',
      }
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
        style: {
          marginTop: '100px',
        }
      });
    }, 1000);
  };
  return (
    <>
      <Header />
      <div id='form'>
        <div id='container'>
          <nav className={s.nav}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/service"> Сервисы</Link>
              </li>
              <li>
                <Link to="/about">О нас</Link>
              </li>
              <li>
                <Link to="/form">Форма</Link>
              </li>
            </ul>
          </nav>
          <div className={s.hero}>
            <h1>Get Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean <br /> sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem <br /> ipsum dolor sit amet, consectetur </p>
            <form ref={form} onSubmit={sendEmail} className={s.btn}  >
              <input type="email" name="user_email" placeholder='Enter your email' />
              {contextHolder}
              <button value="send" type='submit' onClick={openMessage}>
                Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;