import { GraphQLClient } from 'graphql-request';
import { IQueryFilter } from '@ixulabs/ui';
import CONFIG from '~/config';
import { USER } from '~/apollo/query/user';
import { createBearer } from '~/routes/login';

export const GraphQLME = async (request: Request) => {
  const bearer = await createBearer.parse(request.headers.get('Cookie') ?? '');

  const graphQLClient = new GraphQLClient(CONFIG.GRAPHQL_URL, {
    headers: {
      authorization: `Bearer ${bearer}`
    }
  });

  const query = await graphQLClient
    .request<IQueryFilter<'me'>>(USER)
    .catch(() => null);
  return query?.me ?? null;
};
