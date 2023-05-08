import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Api/ApiLogin';
import { useAuth } from '../AuthContext';
import './Login.css'
import LoginIcon from '@mui/icons-material/Login';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setError('');
    setLoading(true);
  
    try {
      const response = await loginUser(email, password);
  
      if (response.status === 200) {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', JSON.stringify(true)); 
        navigate('/download');
      } else {
        setError('E-mail ou senha inválidos');
      }
    } catch (error) {
      setError('Algo deu errado. Por favor, tente novamente mais tarde');
    }
  
    setLoading(false);
  };

  return (
    <div className="login-container">
    <form onSubmit={handleSubmit}>
    <LoginIcon style={{ fontSize: 48 }}/>
      <h1>Login</h1>
      
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label className= 'label-login' htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label className= 'label-login' htmlFor="password">Senha</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit" className="login-btn " disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
      </button>
    </form>
    </div>
  );
}

export default Login;
