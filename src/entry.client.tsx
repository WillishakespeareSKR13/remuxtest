import { ApolloProvider } from '@apollo/client';
import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';
import { client } from './apollo';

hydrate(
  <ApolloProvider client={client}>
    <RemixBrowser />
  </ApolloProvider>,
  document
);
