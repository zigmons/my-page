import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { getGraos, getGramasGraos } from '../../Api/ApiNutri';

export default function Graos() {
  const [graos, setGraos] = useState([]);
  const [gramasGraos, setGramasGraos] = useState('');


  const optionsGorduras = graos.map((gordura) => ({ value: gordura, label: gordura }));


  const handleSelectGordura = (selectedOption) => {
    const nomeGraos = selectedOption.value;

    getGramasGraos(nomeGraos)
      .then((response) => {
        const { gramas } = response.data;
        setGramasGraos(gramas);
      })
      .catch((error) => {
        console.error(error);
        setGramasGraos('Erro ao obter as gramas');
      });
  };


  useEffect(() => {
    getGraos()
      .then((response) => {
        setGraos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getGraos()
      .then((response) => {
        const graosOrdenada = response.data.sort((a, b) => a.localeCompare(b));
        setGraos(graosOrdenada);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Grãos</h1>
      <Select
        options={optionsGorduras}
        onChange={handleSelectGordura}
        placeholder="Selecione um grão"
      />
      {gramasGraos && <p style={{ color: 'white'} }>{gramasGraos} gramas</p>}
    </div>
  );
}