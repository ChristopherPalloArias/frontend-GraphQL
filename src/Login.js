import React, { useState } from 'react';
import { useApolloClient } from '@apollo/client';
import gql from 'graphql-tag';

// Define la consulta GraphQL para el login
const LOGIN_QUERY = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

const Login = ({ onLogin }) => {
  const client = useApolloClient(); // Obtiene el cliente Apollo para ejecutar consultas
  const [username, setUsername] = useState(''); // Estado para el nombre de usuario
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [error, setError] = useState(null); // Estado para manejar errores

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ejecuta la consulta de login
      const { data } = await client.query({
        query: LOGIN_QUERY,
        variables: { username, password }
      });
      console.log('Login response:', data);
      if (data.login === "Login Successfully") {
        onLogin(); // Invoca la función onLogin después de un inicio de sesión exitoso
      } else {
        setError("Invalid credentials"); // Maneja credenciales inválidas
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message); // Maneja errores de la consulta
    }
  };

  return (
    <div>
      <h2>Login GraphQL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>} {/* Muestra el mensaje de error si existe */}
    </div>
  );
};

export default Login;
