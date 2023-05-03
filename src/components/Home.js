import React from 'react';
import './Home.css';
import profilePicture from "../images/IMG-20230117-WA0008.jpg";
// import StarWars1 from '../images/bb8-3-fire_2_4.mp4'


function Home() {
    return (
      <div className='home'>
        {/* <video autoPlay loop muted id="myVideo">
          <source src={StarWars1} type="video/mp4" />
        </video> */}
      <div className="content">
        <h1>Bem vindo a minha página</h1>
        <img src={profilePicture} alt="Minha Foto" />
        <p>Aqui você encontrará algumas informações sobre mim...</p>
      </div>
    </div>
  );
}
  export default Home;  