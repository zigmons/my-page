import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { getGorduras, getGramasGorduras } from '../../Api/ApiNutri';

export default function Gorduras() {
  const [gorduras, setGorduras] = useState([]);
  const [gramasGordura, setGramasGordura] = useState('');


  const optionsGorduras = gorduras.map((gordura) => ({ value: gordura, label: gordura }));


  const handleSelectGordura = (selectedOption) => {
    const nomeGordura = selectedOption.value;

    getGramasGorduras(nomeGordura)
      .then((response) => {
        const { gramas } = response.data;
        setGramasGordura(gramas);
      })
      .catch((error) => {
        console.error(error);
        setGramasGordura('Erro ao obter as gramas');
      });
  };


  useEffect(() => {
    getGorduras()
      .then((response) => {
        setGorduras(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getGorduras()
      .then((response) => {
        const gordurasOrdenada = response.data.sort((a, b) => a.localeCompare(b));
        setGorduras(gordurasOrdenada);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Gorduras</h1>
      <Select
        options={optionsGorduras}
        onChange={handleSelectGordura}
        placeholder="Selecione uma gordura"
      />
      {gramasGordura && <p>{gramasGordura} gramas</p>}
    </div>
  );
}