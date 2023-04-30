import axios from 'axios';

async function sendDataToServer(name, email, password) {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/signup/', {
      name: name,
      email: email,
      password: password,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default sendDataToServer;
