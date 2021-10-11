import reactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App.js';
import './index.css';
reactDom.render(
    <HashRouter>
        <App/>
    </HashRouter>,document.getElementById('root')
);