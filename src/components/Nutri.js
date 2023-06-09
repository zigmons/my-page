import React from 'react'
import Frutas from './Nutri/Frutas'
import Gorduras from './Nutri/Gorduras'
import Graos from './Nutri/Graos'
import Proteina from './Nutri/Proteina'
import Carbo from './Nutri/Carbo'
import './Nutri.css';

export default function Nutri() {
  return (
    <div className="container">
      <h1>Equivalências</h1>
      <div className="select-container">
        <Frutas />
      </div>
      <div className="select-container">
        <Gorduras />
      </div>
      <div className="select-container">
        <Graos />
      </div>
      <div className="select-container">
        <Proteina />
      </div>
      <div className="select-container">
        <Carbo />
      </div>
    </div>
  )
}

