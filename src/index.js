import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import App from './App';

// Renderiza la aplicación React y la envuelve con ApolloProvider para proporcionar el cliente Apollo a la aplicación
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
