import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './AuthContext';
import './assets/certificates/Certificado Front-end.pdf';
import './assets/certificates/Certificado Front-end - Parte 2.pdf';
import './assets/certificates/Certificado Bibliotecas e Frameworks Front end.pdf';
import './assets/certificates/Certificado - Cloud Computing.pdf';
import './assets/certificates/Certificado - Python.pdf';
import './assets/certificates/Certificado Back-end.pdf';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
