import React from 'react';
import './About.css';
import ControlledCarousel from './Carousel';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import reactIcon from '../images/Icons/React-icon.svg.png'
import htmlIcon from '../images/Icons/HTML5_logo_and_wordmark.svg.png'
import cssIcon from '../images/Icons/CSS3_logo_and_wordmark.svg.png'
import jsIcon from '../images/Icons/1200px-Javascript-shield.svg.png'
import pythonIcon from '../images/Icons/Python-logo-notext.svg.png'
import postgreIcon from '../images/Icons/Postgresql_elephant.svg.png'
import awsIcon from '../images/Icons/aws.svg'



function About() {
  const dataNascimento = new Date(1987, 7, 12);
  const idade = Math.floor((new Date() - dataNascimento) / (365.25 * 24 * 60 * 60 * 1000));



    return (
      <div className='about'>
        <h1>Sobre mim <InfoIcon /></h1>
        <p>Meu nome é Rafael, tenho {idade}, sou casado e moro em Jundiaí.</p>
          <ControlledCarousel />

          <h2>Carreira <WorkIcon /></h2>
        <div className='carrer'>  
          <p>Sou formado em Comercio Exterior e MBA em Gestão Comercial. Entretanto, em Janeiro de 2022 decidi estudar e aprofundar meus conhecimentos em programação!</p>
          <p>Comecei meus estudos aprendendo sobre lógica de programação e após entender sobre algumas linguagens, decidi iniciar meus estudos com Python. </p>
          <p>e algumas possibilidades de automação que eu percebi que seriam interessantes, se aplicadas corretamente, entro da área comercial.</p>
          <p> Entendi que com o Python e suas possibilidades de automação e criação de scripts, seria muito util se utilizado esse novo conhecimento juntamente com o conhecimento que eu já possuía dentro da área comercial.</p>
          <p>Me interessei cada vez mais pelos assuntos e comecei a estudar. Hoje tenho conhecimento em HTML, CSS, JS, REACT, Python, PostgreSQL, AWS, APIs. </p>
          <div className="image-container">     
            <img src={htmlIcon} alt="HTML Icon" />    
            <img src={cssIcon} alt="CSS Icon" /> 
            <img src={jsIcon} alt="JS Icon" /> 
            <img src={pythonIcon} alt="Python Icon" /> 
            <img src={postgreIcon} alt="PostgreSQL Icon" /> 
            <img src={awsIcon} alt="AWS Icon" /> 
            <img src={reactIcon} className="react-icon" alt="React Icon" />            
          </div>  
        </div>
        <div className="image-container">

      </div>

      </div>
    );
  }
export default About;  