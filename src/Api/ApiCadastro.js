import axios from 'axios';

async function sendDataToServer(name, email, password) {
  try {
    const response = await axios.post('http://ec2-54-165-212-40.compute-1.amazonaws.com:8000/api/signup/', {
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
