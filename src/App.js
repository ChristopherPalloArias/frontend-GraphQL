import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import client from './apollo';
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false); // Estado para controlar si el usuario está logueado

  return (
    <ApolloProvider client={client}> {/* Proporciona el cliente Apollo a la aplicación */}
      <Router> {/* Configura el enrutador para manejar la navegación */}
        <div className="App">
          <Routes> {/* Define las rutas de la aplicación */}
            <Route 
              path="/login" 
              element={!isLoggedIn ? <Login onLogin={() => setLoggedIn(true)} /> : <Navigate to="/dashboard" />} 
            /> {/* Ruta para el login, redirige al dashboard si está logueado */}
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? <Dashboard onLogout={() => setLoggedIn(false)} /> : <Navigate to="/login" />} 
            /> {/* Ruta para el dashboard, redirige al login si no está logueado */}
            <Route 
              path="/" 
              element={<Navigate to="/login" />} 
            /> {/* Ruta por defecto, redirige al login */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;