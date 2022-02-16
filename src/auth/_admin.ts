import { IQueryFilter } from '@ixulabs/ui';
import { GraphQLClient } from 'graphql-request';
import { LoaderFunction, redirect } from 'remix';
import { ARTICLES } from '~/apollo/query/articles';
import CONFIG from '~/config';
import { createBearer } from '~/routes/login';
import { GraphQLME } from './__auth';

const AuthAdmin: LoaderFunction = async ({ request }) => {
  const me = await GraphQLME(request);
  const bearer = await createBearer.parse(request.headers.get('Cookie') ?? '');
  const graphQLClient = new GraphQLClient(CONFIG.GRAPHQL_URL, {
    headers: {
      authorization: `Bearer ${bearer}`
    }
  });

  const query = await graphQLClient
    .request<IQueryFilter<'listArticles'>>(ARTICLES, {
      filter: {
        projectId: {
          eq: 'b6341425-7c7b-45bd-939a-dc15db168d62'
        }
      },
      order: {
        createdAt: 'DESC'
      }
    })
    .catch(() => null);

  if (!me) {
    return redirect('/login');
  }

  return {
    me,
    articles: query?.listArticles?.items ?? []
  };
};

export default AuthAdmin;
