import { IQueryFilter } from '@ixulabs/ui';
import { GraphQLClient } from 'graphql-request';
import { LoaderFunction, redirect } from 'remix';
import { ARTICLES, GETARTICLEBYID } from '~/apollo/query/articles';
import CONFIG from '~/config';
import { createBearer } from '~/routes/login';
import { GraphQLME } from './__auth';

const AuthArticle: LoaderFunction = async ({ request, params }) => {
  const me = await GraphQLME(request);
  const bearer = await createBearer.parse(request.headers.get('Cookie') ?? '');
  const graphQLClient = new GraphQLClient(CONFIG.GRAPHQL_URL, {
    headers: {
      authorization: `Bearer ${bearer}`
    }
  });

  const query = await graphQLClient
    .request<IQueryFilter<'articleById'>>(GETARTICLEBYID, {
      id: params.id,
      viewed: false
    })
    .catch(() => null);

  if (!me) {
    return redirect('/login');
  }

  return {
    me,
    article: query?.articleById ?? {}
  };
};

export default AuthArticle;
