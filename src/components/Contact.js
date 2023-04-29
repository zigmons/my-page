import React from 'react';
import './Contact.css'
import linkedinlogo from "../images/LinkedIn_icon_circle.svg.png";
import emailimage from "../images/emailimagepng.png"
import InputMask from 'react-input-mask';


function Contact() {


    return (
      <div className='contact'>
        <h1>Contatos</h1>
        <p>Segue abaixo algumas formas de entrar em contato comigo:</p>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/rafael-a-sousa/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinlogo} alt="LinkedIn" />
          </a>
          <a href="mailto: rafael_sousa87@hotmail.com">
            <img src={emailimage} alt="Email" />
          </a>
        </div>
        <div className="contact-container">
      <h2>Mande sua mensagem!</h2>
      <form action='https://formspree.io/f/xoqzywoo'
          method='POST'
          >
      <input type='hidden' name='_replyto' value='rafael_sousa87@hotmail.com' />
      <label className ='label'>
          Nome:
          <input type="name" name="email" required />
        </label>
        <label className ='label'>
          E-mail:
          <input type="email" name="email" required />
        </label>
        <label className ='label'>
          Telefone:

          <InputMask
              mask="(99)99999-9999"
              name="phone"
              required
              // pattern='[0-1]{10,}'
            >
            </InputMask>

          </label>
        <label className ='label'>
          Mensagem:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
      </div>
      </div>
    );
  }
export default Contact;