import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import StoreContextProvider from './Context/StoreContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <StoreContextProvider>
            <App />
        </StoreContextProvider>
    );