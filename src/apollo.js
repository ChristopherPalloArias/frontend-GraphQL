import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Configura el cliente Apollo
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql', // URI del servidor GraphQL
    credentials: 'include' // Incluye credenciales en las solicitudes (útil para autenticación)
  }),
  cache: new InMemoryCache() // Configura la caché en memoria para Apollo Client
});

export default client; // Exporta el cliente Apollo para usarlo en la aplicación
