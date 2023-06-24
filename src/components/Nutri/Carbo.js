import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { getCarbo, getGramasCarbo, getGramasCarbo2, getGramasCarbo3 } from '../../Api/ApiNutri';

export default function Carbo() {
  const [quantidadeOpcoes, setQuantidadeOpcoes] = useState(1);
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState([]);
  const [resultado, setResultado] = useState('');
  const [opcoesCarbo, setOpcoesCarbo] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    getCarbo()
      .then((response) => {
        const carboOrdenado = response.data.map((carbo) => ({
          value: carbo,
          label: carbo,
        }));
        setOpcoesCarbo(carboOrdenado);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (opcoesSelecionadas.length === quantidadeOpcoes && !opcoesSelecionadas.includes(undefined)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [opcoesSelecionadas, quantidadeOpcoes]);

  const handleSelectQuantidade = (selectedOption) => {
    setQuantidadeOpcoes(selectedOption.value);
    setOpcoesSelecionadas([]); // Limpar as opções selecionadas quando a quantidade de opções é alterada
  };

  const handleSelecionarOpcao = (selectedOption, index) => {
    setOpcoesSelecionadas((prevOpcoes) => {
      const updatedOpcoes = [...prevOpcoes];
      updatedOpcoes[index] = selectedOption;
      return updatedOpcoes;
    });
  };

  const handleClick = () => {
    if (opcoesSelecionadas.length !== quantidadeOpcoes || opcoesSelecionadas.includes(undefined)) {
      setResultado('Selecione a quantidade correta de opções.');
      return;
    }

    if (quantidadeOpcoes === 1) {
      const nomeCarbo = opcoesSelecionadas[0].value;
      getGramasCarbo(nomeCarbo)
        .then((response) => {
          const { gramas } = response.data;
          setResultado(`Opção selecionada: ${nomeCarbo}, Gramas: ${gramas}`);
        })
        .catch((error) => {
          console.error(error);
          console.error('Detalhes do erro: ', error);
          setResultado('Erro ao obter as gramas');
        });
    } else if (quantidadeOpcoes === 2) {
        const nomeCarbo1 = opcoesSelecionadas[0].value;
        const nomeCarbo2 = opcoesSelecionadas[1].value;
        getGramasCarbo2(nomeCarbo1, nomeCarbo2)
          .then((response) => {
            const { duas_opcoes1, duas_opcoes2 } = response.data;
            setResultado(`Opções selecionadas: ${nomeCarbo1} - Gramas: ${duas_opcoes1}, ${nomeCarbo2} - Gramas: ${duas_opcoes2}`);
          })
          .catch((error) => {
            console.error(error);
            console.error('Detalhes do erro: ', error);
            setResultado('Erro ao obter as gramas');
          });
      } else if (quantidadeOpcoes === 3) {
        const nomeCarbo1 = opcoesSelecionadas[0].value;
        const nomeCarbo2 = opcoesSelecionadas[1].value;
        const nomeCarbo3 = opcoesSelecionadas[2].value;
        getGramasCarbo3(nomeCarbo1, nomeCarbo2, nomeCarbo3)
          .then((response) => {
            const { tres_opcoes1, tres_opcoes2, tres_opcoes3 } = response.data;
            setResultado(`Opções selecionadas: ${nomeCarbo1} - Gramas: ${tres_opcoes1}, ${nomeCarbo2} - Gramas: ${tres_opcoes2}, ${nomeCarbo3} - Gramas: ${tres_opcoes3}`);
          })
          .catch((error) => {
            console.error(error);
            console.error('Detalhes do erro: ', error);
            setResultado('Erro ao obter as gramas');
          });
    }
  };

  return (
    <div>
      <h1>Carboidratos</h1>
      <Select
        options={[
          { value: 1, label: '1 opção' },
          { value: 2, label: '2 opções' },
          { value: 3, label: '3 opções' },
        ]}
        defaultValue={{ value: 1, label: '1 opção' }}
        onChange={handleSelectQuantidade}
      />
      {[...Array(quantidadeOpcoes)].map((_, index) => (
        <Select
          key={index}
          options={opcoesCarbo}
          value={opcoesSelecionadas[index] || ''}  // Vincule ao valor do estado
          onChange={(selectedOption) => handleSelecionarOpcao(selectedOption, index)}
          placeholder={`Opção ${index + 1}`}
        />
      ))}
      <button onClick={handleClick} disabled={isButtonDisabled}>
        Selecionar
      </button>
      {resultado && <p style={{ color: 'white'} }>{resultado}</p>}
    </div>
  );}
