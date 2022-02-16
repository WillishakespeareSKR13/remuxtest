const CONFIG = {
  GRAPHQL_URL:
    process.env.GRAPHQL_SERVER_URL ??
    'https://gateway.staging.ixulabs.com/graphql/',
  GRAPHQL_URL_WS: 'wss://chat-cs-service.staging.sites.kaliarq.com/graphql',
  SITE: process.env.SITE ?? '.sites.develop.kaliarq.com',
  APP_ENV: process.env.APP_ENV ?? 'develop'
};

export default CONFIG;
