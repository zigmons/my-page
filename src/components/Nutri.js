import React from 'react'
import Frutas from './Nutri/Frutas'
import Gorduras from './Nutri/Gorduras'
import Graos from './Nutri/Graos'
import Proteina from './Nutri/Proteina'
import Carbo from './Nutri/Carbo'
import './Nutri.css';

export default function Nutri() {
  return (
    <div>
        <Frutas />,
        <Gorduras />
        <Graos />
        <Proteina />
        <Carbo />
    </div>
  )
}

