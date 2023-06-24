import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { getProteina, getGramasProteina } from '../../Api/ApiNutri';

export default function Proteina() {
  const [proteina, setProteina] = useState([]);
  const [gramasProteina, setGramasProteina] = useState('');


  const optionsProteina = proteina.map((proteina) => ({ value: proteina, label: proteina }));


  const handleSelectGordura = (selectedOption) => {
    const nomeProteina = selectedOption.value;

    getGramasProteina(nomeProteina)
      .then((response) => {
        const { gramas } = response.data;
        setGramasProteina(gramas);
      })
      .catch((error) => {
        console.error(error);
        setGramasProteina('Erro ao obter as gramas');
      });
  };


  useEffect(() => {
    getProteina()
      .then((response) => {
        setProteina(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getProteina()
      .then((response) => {
        const proteinaOrdenada = response.data.sort((a, b) => a.localeCompare(b));
        setProteina(proteinaOrdenada);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Proteína</h1>
      <Select
        options={optionsProteina}
        onChange={handleSelectGordura}
        placeholder="Selecione uma Proteína"
      />
      {gramasProteina && <p>{gramasProteina} gramas</p>}
    </div>
  );
}