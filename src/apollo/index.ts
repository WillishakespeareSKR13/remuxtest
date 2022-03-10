import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import CONFIG from '~/config';
import Cookies from 'js-cookie';
import { createContext } from 'react';

const isBrowser = typeof window !== 'undefined';
const initalState = isBrowser ? window.__APOLLO_STATE__ : undefined;

const httpLink = createHttpLink({
  uri: `${CONFIG.GRAPHQL_URL}`
});

const authLink = setContext(async (_, { headers }) => ({
  headers: {
    authorization: `Bearer ${Cookies.get('bearer')}`,
    ...headers
  }
}));

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (
    graphQLErrors &&
    !graphQLErrors.filter((error) => error.message === `INVALID_TOKEN`)
  )
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.warn(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.warn(`[Network error]: ${networkError}`);
});

const link = errorLink.concat(authLink.concat(httpLink));

export const client = new ApolloClient({
  link,
  ssrMode: isBrowser,
  cache: new InMemoryCache().restore(initalState),
  connectToDevTools: true,
  queryDeduplication: true
});

export default createContext(initalState);
