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
import NavbarAbout from './NavbarAbout';
import ScrollToTop from './ScrollToTop';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi } from '@fortawesome/free-solid-svg-icons'
import{faCompactDisc} from '@fortawesome/free-solid-svg-icons'
import {faHandPeace} from '@fortawesome/free-solid-svg-icons'









function About() {
  const dataNascimento = new Date(1987, 6, 12);
  const idade = Math.floor((new Date() - dataNascimento) / (365.25 * 24 * 60 * 60 * 1000));




    return (
      
      <div className='about' id='about'>
        <NavbarAbout />
        <h1>Sobre mim <InfoIcon /></h1>
        <p>Meu nome é Rafael, tenho {idade} anos de idade, sou casado e moro em Jundiaí-SP.</p>
          <ControlledCarousel />

          <h2 id='carrer'>Carreira <WorkIcon /></h2>
        <div className='carrer' >  
          <p>
              É um prazer compartilhar um pouco da minha jornada com você!<br>
              </br> Sou formado em Comércio Exterior e possuo um MBA em Gestão Comercial. No entanto, em janeiro de 2022 decidi expandir meus conhecimentos e estudar programação.<br>
              </br>Comecei aprendendo sobre lógica de programação e, após me familiarizar com algumas linguagens, decidi aprofundar meus estudos em Python. Rapidamente percebi as possibilidades de automação que a linguagem oferecia, e como isso poderia ser aplicado de maneira interessante na área comercial.
              Foi aí que entendi como o Python, em conjunto com o conhecimento que já possuía na área comercial, poderia ser extremamente útil.<br>
              </br> E, à medida que mergulhava mais no mundo da programação, meu interesse só crescia.<br>
              </br> Atualmente, tenho conhecimentos em HTML, CSS, JS, REACT, Python, PostgreSQL, AWS e APIs.
              Fico feliz em poder compartilhar minha experiência com você e espero que minha jornada possa inspirá-lo(a) a buscar novos conhecimentos e expandir suas habilidades.<br>
              </br> Se quiser conversar mais sobre programação ou outras áreas de interesse, sinta-se à vontade para entrar em contato comigo.<br></br>
              <br></br>Abaixo, algumas das tecnologias que tenho conhecimento:
          </p>

          <div className="image-container">     
            <img src={htmlIcon} alt="HTML Icon" title ='HTML'/>    
            <img src={cssIcon} alt="CSS Icon" title ='CSS'/> 
            <img src={jsIcon} alt="JS Icon" title ='JavaScript' /> 
            <img src={pythonIcon} alt="Python Icon" title ='Python'/> 
            <img src={postgreIcon} alt="PostgreSQL Icon" title ='PostgreSQL'/> 
            <img src={awsIcon} alt="AWS Icon" title ='Amazon AWS'/> 
            <img src={reactIcon} className="react-icon" alt="React Icon" title ='React'/>            
          </div> 
        </div>
        <h2 id='hobbies'>Hobby <FontAwesomeIcon icon={faHandPeace} beat size="2xs" /></h2>
        <div className='carrer'>  
          <p>
              Compartilhar momentos com a minha família é uma das coisas que mais aprecio na vida. Adoro sair para comer fora com minha esposa e familiares, sempre em busca de novos sabores e experiências gastronômicas. 
              <br></br>E quando se trata de eventos familiares, nada me deixa mais feliz do que a presença da minha mãe, meu pai e meus tios. São momentos especiais que guardo com muito carinho em minha memória.
              <br></br><DinnerDiningIcon style={{ fontSize: 48 }}/>
              <br></br> Outro hobby que ocupa parte do meu tempo livre é jogar video game, especialmente os MMORPGs, como o World of Warcraft. Adoro a imersão em mundos fictícios e o desafio de completar missões e interagir com outros jogadores.
              <br></br><VideogameAssetIcon  style={{ fontSize: 48 }} />
              <br></br>Quando não estou jogando, gosto de assistir filmes de ficção científica e fantasia, como Senhor dos Anéis, Star Wars e filmes de super-heróis. Na verdade, Star Wars é meu filme predileto de todos os tempos.
              <br></br> <FontAwesomeIcon icon={faJedi} flip size="2xl" />
              <br></br> Em relação à música, sou apaixonado por rock, mas sou eclético e ouço de tudo um pouco. Sempre estou em busca de novas bandas e artistas para descobrir.
              <br></br><FontAwesomeIcon icon={faCompactDisc} spin size="2xl" />
              <br></br> Por fim, sou fascinado por tecnologia e todos os assuntos relacionados. Sempre estou acompanhando as novidades e tendências do mercado, e adoro experimentar novas tecnologias e dispositivos.<br>
              </br>
          </p>
      </div>
      <ScrollToTop />
      </div>
    );
  }
export default About;  