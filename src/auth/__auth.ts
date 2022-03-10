import { GraphQLClient } from 'graphql-request';
import CONFIG from '~/config';
import { USER } from '~/apollo/query/user';
import { createBearer } from '~/routes/login';
import { IQueryFilter } from '~/types';
import { client } from '~/apollo';
import Cookies from 'cookie';

export const GraphQLME = async (request: Request) => {
  const cookies = Cookies.parse(request.headers.get('cookie') ?? '');
  const query = await client
    .query<IQueryFilter<'me'>>({
      query: USER,
      context: {
        headers: {
          authorization: `Bearer ${cookies?.bearer ?? ''}`
        }
      }
    })
    .catch((e) => e);

  // console.log(query);
  const me = query?.data?.me;
  return me ?? null;
};
