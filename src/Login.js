import React, { useState } from 'react';
import { useApolloClient } from '@apollo/client';
import gql from 'graphql-tag';

const LOGIN_QUERY = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

const Login = () => {
  const client = useApolloClient();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await client.query({
        query: LOGIN_QUERY,
        variables: { username, password }
      });
      console.log('Login response:', data);
      setSuccess(data.login); // Mostrar mensaje de éxito
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
};

export default Login;
