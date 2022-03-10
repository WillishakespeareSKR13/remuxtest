import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from 'remix';
import type { MetaFunction } from 'remix';
import StylesGlobal from './styles';
import { useContext } from 'react';
import ApolloContext from './apollo';

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
};

export default function App() {
  const initialState = useContext(ApolloContext);
  console.log('state', initialState);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Outlet />
        <StylesGlobal />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(
            initialState ?? {}
          )}`.replace(/</g, '\\u003c')
        }}
      />
    </html>
  );
}
