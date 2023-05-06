import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { handleSubmit } from '../Api/ApiCadastro.js';
import './Cadastro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'


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

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const { name, email, password } = formData;

      if (!validateEmail(email)) {
        setErrorMessage('Email inválido.');
        setIsLoading(false);
        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
        return;
      }

      if (password.length < 6) {
        setErrorMessage('A senha deve ter pelo menos 6 caracteres.');
        setIsLoading(false);
        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
        return;
      }

      const response = await handleSubmit(name, email, password);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSuccessMessage('Cadastro realizado com sucesso!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
        setFormData({ name: '', email: '', password: '' });
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Ocorreu um erro ao cadastrar. Por favor, verifique se o usuário já existe');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsLoading(false);
    }
    
  };

  return (
    <div className='form'>
      
      <h1>Cadastre-se <FontAwesomeIcon icon={faUserPlus} beatFade size='sm' /></h1>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
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
          'Cadastrar'
        )}
      </Button>
    </Form>
    </div>
  );
}

export default Cadastro;
