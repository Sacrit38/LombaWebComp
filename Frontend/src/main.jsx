
import { PrimeReactProvider } from 'primereact/api';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthContextProvider from './context/Auth';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(

    <PrimeReactProvider>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
    </PrimeReactProvider>
);
