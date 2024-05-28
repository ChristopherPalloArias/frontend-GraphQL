import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import client from './apollo';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={!isLoggedIn ? <Login onLogin={() => setLoggedIn(true)} /> : <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard onLogout={() => setLoggedIn(false)} /> : <Navigate to="/login" />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
