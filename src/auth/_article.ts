import { LoaderFunction } from 'remix';
import { client } from '~/apollo';
import { GETARTICLEBYID } from '~/apollo/query/articles';
import AuthApollo from '~/apollo/utils/authApollo';
import { IQueryFilter } from '~/types';
import { GraphQLME } from './__auth';

const AuthArticle: LoaderFunction = async ({ request, params }) => {
  const me = await GraphQLME(request);

  const query = await client
    .query<IQueryFilter<'articleById'>>({
      query: GETARTICLEBYID,
      variables: {
        id: params.id,
        viewed: false
      },
      ...AuthApollo(request)
    })
    .catch(() => null);

  const article = query?.data?.articleById;

  return {
    me: me ?? {},
    article: article ?? {},
    id: params.id
  };
};

export default AuthArticle;
