// import React from 'react';
// import { useState } from 'react';
// import { Form, Button, Spinner } from 'react-bootstrap';
// import  sendDataToServer  from '../Api/ApiCadastro';

// function Cadastro() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await sendDataToServer(name, email, password);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//       setName('');
//       setEmail('');
//       setPassword('');
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="formBasicName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
//       </Form.Group>

//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//       </Form.Group>

//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//       </Form.Group>

//       <Button variant="primary" type="submit" disabled={isLoading}>
//         {isLoading ? (
//           <Spinner
//             as="span"
//             animation="border"
//             size="sm"
//             role="status"
//             aria-hidden="true"
//           />
//         ) : (
//           'Submit'
//         )}
//       </Button>
//     </Form>
//   );
// }

// export default Cadastro;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import  sendDataToServer  from '../Api/ApiCadastro';

const Cadastro = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('signupData:', signupData);

    sendDataToServer(signupData)
      .then(response => {
        console.log(response);
        alert(response.message);
      })
      .catch(error => {
        console.log(error);
        alert('Error creating user');
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Nome</Form.Label>
          <Form.Control type="text" name="name" id="name" placeholder="Enter your name" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control type="email" name="email" id="email" placeholder="Enter your email" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Senha</Form.Label>
          <Form.Control type="password" name="password" id="password" placeholder="Enter your password" onChange={handleInputChange} />
        </Form.Group>
        <Button type="submit" color="primary">Enviar</Button>
      </Form>
    </div>
  );
};

export default Cadastro;
