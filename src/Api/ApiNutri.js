import axios from 'axios';

const api = axios.create({
    baseURL: ' https://bcux7mgh1m.execute-api.us-east-1.amazonaws.com/dev/api',
  });

export const getFrutas = () => {
  return api.get('/frutas');
};

export const getGramasFruta = (nomeFruta) => {
  return api.get(`/fruta/${nomeFruta}`);
};

export const getGorduras = () => {
    return api.get('/gorduras');
  };

  export const getGramasGorduras = (nomeGordura) => {
    return api.get(`/gordura/${nomeGordura}`);
  };


  export const getGraos = () => {
    return api.get('/graos');
  };

  export const getGramasGraos = (nomeGrao) => {
    return api.get(`/graos/${nomeGrao}`);
  };


  export const getProteina= () => {
    return api.get('/proteina');
  };
  export const getGramasProteina = (nomeProteina) => {
    return api.get(`/proteina/${nomeProteina}`);
  };


  export const getCarbo= () => {
    return api.get('/carbo');
  };
  export const getGramasCarbo = (nomeCarbo) => {
    return api.get(`/carbo/${nomeCarbo}`);
  };
  export const getGramasCarbo2 = (nomeCarbo1, nomeCarbo2) => {
    return api.get(`/carbo2/${nomeCarbo1}/${nomeCarbo2}`);
  };
  export const getGramasCarbo3 = (nomeCarbo1, nomeCarbo2, nomeCarbo3) => {
    return api.get(`/carbo3/${nomeCarbo1}/${nomeCarbo2}/${nomeCarbo3}`);
  };