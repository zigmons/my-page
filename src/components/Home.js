import React from 'react';
import './Home.css';
import profilePicture from "../images/IMG-20230117-WA0008.jpg";
// import StarWars1 from '../images/bb8-3-fire_2_4.mp4'


function Home() {
    return (
      <div className='home'>
      <div className="content">
        <h1>Olá, seja bem-vindo(a) à minha página pessoal e portfolio!</h1>
        <img src={profilePicture} alt="Minha Foto" />
        <p>Aqui, gostaria de compartilhar algumas informações sobre mim e conversar sobre temas relacionados à carreira, tecnologia, hobbies e gostos.</p>
        <p>Caso tenha interesse em conhecer mais sobre minhas habilidades e certificações, é possível ter acesso a elas após fazer cadastro e login no site. Será um prazer compartilhar meus conhecimentos e experiências com você. </p>
        <p>Fique à vontade para explorar esta página e entrar em contato comigo caso tenha alguma dúvida ou deseje conversar sobre algum assunto em específico. Agradeço pela sua visita e espero que possamos trocar informações e conhecimentos em breve!</p>
      </div>
    </div>
  );
}
  export default Home;  