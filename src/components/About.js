import React from 'react';
import './About.css';

function About() {
  const dataNascimento = new Date(1987, 6, 12);
  const idade = Math.floor((new Date() - dataNascimento) / (365.25 * 24 * 60 * 60 * 1000));



    return (
      <div className='about'>
        <h1>Sobre mim</h1>
        <p>Meu nome é Rafael, tenho {idade}, casado e moro em Jundiaí.</p>
      </div>
    );
  }
export default About;  