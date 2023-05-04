import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { handleSubmit } from '../Api/ApiCadastro.js';
import './Cadastro.css'


function Cadastro() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { name, email, password } = formData;
      const response = await handleSubmit(name, email, password);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Optionally, you can show a success message or redirect to a success page
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
      // Optionally, you can show an error message to the user
    } finally {
      setIsLoading(false);
      setFormData({ name: '', email: '', password: '' });
    }
  };

  return (
    <div className='form'>
      <h1>Cadastre-se</h1>
    <Form  onSubmit={handleFormSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label className='label'>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label className='label'>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className='label'>Senha</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          'Submit'
        )}
      </Button>
    </Form>
    </div>
  );
}

export default Cadastro;
