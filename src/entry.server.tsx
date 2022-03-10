import { renderToString } from 'react-dom/server';
import { RemixServer } from 'remix';
import type { EntryContext } from 'remix';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';
import { ApolloProvider } from '@apollo/client';
import ApolloContext, { client } from './apollo';
import { getDataFromTree } from '@apollo/client/react/ssr';

const key = 'css';
const cache = createCache({ key });
const { extractCriticalToChunks, constructStyleTagsFromChunks } =
  createEmotionServer(cache);

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const App = (
    <ApolloProvider client={client}>
      <RemixServer context={remixContext} url={request.url} />
    </ApolloProvider>
  );

  return getDataFromTree(App).then(() => {
    const initialState = client.extract();
    const markup = renderToString(
      <ApolloContext.Provider value={initialState}>
        <CacheProvider value={cache}>{App}</CacheProvider>
      </ApolloContext.Provider>
    );
    const chunks = extractCriticalToChunks(markup);
    const styles = constructStyleTagsFromChunks(chunks);
    const markupWithStyles = markup.replace('__STYLES__', styles);

    responseHeaders.set('Content-Type', 'text/html');

    return new Response('<!DOCTYPE html>' + markupWithStyles, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  });
}
