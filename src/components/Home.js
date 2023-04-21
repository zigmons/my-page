import React from 'react';
import './Home.css';
import profilePicture from "../images/IMG-20230117-WA0008.jpg";
import './Navbar.css'


function Home() {
    return (
      <div className='home'>
        <h1>Bem vindo a minha página</h1>
        <img src={profilePicture} alt ="Minha Foto" />
        <p>Aqui você encontrará algumas informações sobre mim...</p>
      </div>
    );
  }
  export default Home;  