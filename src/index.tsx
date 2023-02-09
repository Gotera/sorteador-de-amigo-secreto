import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Formulario from './components/Formulario';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Formulario />
  </React.StrictMode>,
  document.getElementById('root')
);