import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.rsca.com.br:8000',
});

export async function loginUser(email, password) {
  const response = await api.post('/api/login', {
    email,
    password,
  });

  return response;
}