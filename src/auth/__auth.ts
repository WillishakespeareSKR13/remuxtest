import { USER } from '~/apollo/query/user';
import { IQueryFilter } from '~/types';
import { client } from '~/apollo';
import AuthApollo from '~/apollo/utils/authApollo';
import { ApolloQueryResult } from '@apollo/client';

export const GraphQLME = async (request: Request) => {
  const { data } = await client
    .query<IQueryFilter<'me'>>({
      query: USER,
      ...AuthApollo(request)
    })
    .catch(() => ({} as ApolloQueryResult<IQueryFilter<'me'>>));

  const me = data?.me;
  return me ?? null;
};
