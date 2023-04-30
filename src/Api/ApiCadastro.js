// async function sendDataToServer(name, email, password) {
//   try {
//     const response = await fetch('http://localhost:8000/api/signup/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: name,
//         email: email,
//         password: password,
//       })
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }


// export default sendDataToServer;


import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/';

function sendDataToServer(signupData) {
  const url = `${API_BASE_URL}signup/`;

  return axios.post(url, signupData)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      return error;
    });
}

export default sendDataToServer
