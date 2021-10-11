import React from 'react';
import reactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App.js';
import './index.css';
reactDom.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>

    </React.StrictMode>,document.getElementById('root')
);