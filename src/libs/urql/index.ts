import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from 'urql';

const GRAPHQL_ENDPOINT = 'http://localhost:8080/graphql';

console.log(`GRAPHQL_ENDPOINT:${GRAPHQL_ENDPOINT}`);

const urqlClient = createClient({
  url: GRAPHQL_ENDPOINT,
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
});

export default urqlClient;
