import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'urql';
import urqlClient from '@/libs/urql';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={urqlClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
