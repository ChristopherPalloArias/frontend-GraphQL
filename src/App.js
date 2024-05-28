import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        {!isLoggedIn ? (
          <Login onLogin={() => setLoggedIn(true)} />
        ) : (
          <Dashboard onLogout={() => setLoggedIn(false)} />
        )}
      </div>
    </ApolloProvider>
  );
}

export default App;
