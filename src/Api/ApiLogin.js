import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-52-204-111-64.compute-1.amazonaws.com:8000',
});

export async function loginUser(email, password) {
  const response = await api.post('/api/login', {
    email,
    password,
  });

  return response;
}