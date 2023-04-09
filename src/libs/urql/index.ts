import { cacheExchange, createClient, fetchExchange } from 'urql';

const GRAPHQL_ENDPOINT = 'http://localhost:8080/graphql';

console.log(`GRAPHQL_ENDPOINT:${GRAPHQL_ENDPOINT}`);

const urqlClient = createClient({
  url: GRAPHQL_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken');
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      };
    } else {
      return {};
    }
  },
});

export default urqlClient;
