import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bcux7mgh1m.execute-api.us-east-1.amazonaws.com/dev',
});

export async function changePassword(email, oldPassword, newPassword) {
  const response = await api.put('/api/changepassword', {
    email,
    oldPassword,
    newPassword,
  });

  return response;
}
