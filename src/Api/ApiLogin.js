import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bcux7mgh1m.execute-api.us-east-1.amazonaws.com/dev',
});

export async function loginUser(email, password) {
  const response = await api.post('/api/login', {
    email,
    password,
  });

  return response;
}