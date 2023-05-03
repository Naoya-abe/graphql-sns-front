import { cacheExchange, createClient, Exchange, fetchExchange } from 'urql';

import { subscriptionCustomExchange } from './urqlSubscriptionConfig';

const GRAPHQL_ENDPOINT = 'http://localhost:8080/graphql';
console.log(`GRAPHQL_ENDPOINT:${GRAPHQL_ENDPOINT}`);

export const urqlExchanges = [
  cacheExchange,
  fetchExchange,
  subscriptionCustomExchange,
].filter(Boolean) as Exchange[];

const urqlClient = createClient({
  url: GRAPHQL_ENDPOINT,
  exchanges: urqlExchanges,
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
