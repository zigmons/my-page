import React, { useState } from 'react';

import { changePassword } from '../Api/ApiPasswordChange';
import './PasswordChange.css';

function PasswordChange() {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleOldPasswordChange = (event) => {
      setOldPassword(event.target.value);
    };
  
    const handleNewPasswordChange = (event) => {
      setNewPassword(event.target.value);
    };
  
    const handleConfirmNewPasswordChange = (event) => {
      setConfirmNewPassword(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (newPassword !== confirmNewPassword) {
        setError('As novas senhas não coincidem');
        return;
      }
  
      if (newPassword.length < 6) {
        setError('A nova senha deve ter pelo menos 6 caracteres');
        return;
      }
  
      setError('');
      setLoading(true);
  
      try {
        await changePassword(email, oldPassword, newPassword);
        setSuccess('Senha alterada com sucesso');
        setTimeout(() => {
          setSuccess('');
        }, 5000);
      } catch (error) {
        setError('Não foi possível alterar a senha. Verifique suas informações e tente novamente');
      }
  
      setLoading(false);
    };
  
    return (
      <div className="password-change-container">
        <form onSubmit={handleSubmit}>
          <h1>Alterar senha</h1>
  
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
  
          <div className="form-group">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="oldPassword">Senha antiga</label>
            <input
              type="password"
              className="form-control"
              id="oldPassword"
              value={oldPassword}
              onChange={handleOldPasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Nova senha</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmNewPassword">Confirmar nova senha</label>
            <input
              type="password"
              className="form-control"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={handleConfirmNewPasswordChange}
              required
            />
          </div>
          <button type="submit" className="password-change-btn" disabled={loading}>
          {loading ? 'Loading...' : 'Alterar senha'}
        </button>
      </form>
    </div>
  );
}

export default PasswordChange;
