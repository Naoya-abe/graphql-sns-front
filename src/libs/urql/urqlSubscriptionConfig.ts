import { SubscriptionClient } from 'subscriptions-transport-ws';
import { Exchange, subscriptionExchange } from 'urql';

const isSSR = typeof window === 'undefined';

const transportWsClient = !isSSR
  ? new SubscriptionClient('ws://localhost:8080/graphql', { reconnect: true })
  : undefined;

export const subscriptionCustomExchange: Exchange | null = transportWsClient
  ? subscriptionExchange({
      forwardSubscription: (operation) => {
        return transportWsClient.request(operation);
      },
    })
  : null;
