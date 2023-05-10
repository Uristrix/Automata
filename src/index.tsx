import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { NotificationContainer } from 'react-notifications';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <CookiesProvider>
    <BrowserRouter>
      <App />
      <NotificationContainer />
    </BrowserRouter>
  </CookiesProvider>,
);
