import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Asegúrate de que este archivo existe y está vacío o tiene estilos básicos.
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Error: Elemento con ID "root" no encontrado. Revisa public/index.html');
  // Si ves este error en la consola del navegador, el problema está en index.html
}