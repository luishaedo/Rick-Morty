import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store';
import  { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
<Provider store= {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</Provider>      
);
document.getElementById('root')
