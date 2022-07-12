import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
