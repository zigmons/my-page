import React from 'react';
import './Contact.css'
import linkedinlogo from "../images/LinkedIn_icon_circle.svg.png";
import emailimage from "../images/emailimagepng.png"


function Contact() {
    return (
      <div className='contact'>
        <h1>Entre em contato comigo!</h1>
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
      <h1>Contact Us</h1>
      <form>
      <label>
          Nome:
          <input type="name" name="email" required />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" required />
        </label>
        <label>
          Telefone:
          <input type="tel" name="phone" required />
        </label>
        <label>
          Mensagem:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
    );
  }
export default Contact;