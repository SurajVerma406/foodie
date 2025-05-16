import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextState from './context/ContextState';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextState>
        <BrowserRouter>
            <App />
        </BrowserRouter >
    </ContextState>
);

reportWebVitals();
