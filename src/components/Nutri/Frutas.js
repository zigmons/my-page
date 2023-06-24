import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { getFrutas, getGramasFruta, } from '../../Api/ApiNutri';

export default function Frutas() {
  const [frutas, setFrutas] = useState([]);
  const [gramasFruta, setGramasFruta] = useState('');

  const optionsFrutas = frutas.map((fruta) => ({ value: fruta, label: fruta }));


  const handleSelectFruta = (selectedOption) => {
    const nomeFruta = selectedOption.value;

    getGramasFruta(nomeFruta)
      .then((response) => {
        const { gramas } = response.data;
        setGramasFruta(gramas);
      })
      .catch((error) => {
        console.error(error);
        setGramasFruta('Erro ao obter as gramas');
      });
  };


  useEffect(() => {
    getFrutas()
      .then((response) => {
        setFrutas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getFrutas()
      .then((response) => {
        const frutasaOrdenada = response.data.sort((a, b) => a.localeCompare(b));
        setFrutas(frutasaOrdenada);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      <h1>Frutas</h1>
      <Select
        options={optionsFrutas}
        onChange={handleSelectFruta}
        placeholder="Selecione uma fruta"
      />
      {gramasFruta && <p style={{ color: 'white'} }>{gramasFruta} gramas</p>}
    </div>
  );
}
