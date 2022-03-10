import { LoaderFunction } from 'remix';
import { client } from '~/apollo';
import { ARTICLES } from '~/apollo/query/articles';
import { IQueryFilter } from '~/types';
import { GraphQLME } from './__auth';
import Cookies from 'cookie';

const AuthAdmin: LoaderFunction = async ({ request }) => {
  const me = await GraphQLME(request);
  const cookies = Cookies.parse(request.headers.get('cookie') ?? '');
  const query = await client
    .query<IQueryFilter<'listArticles'>>({
      query: ARTICLES,
      variables: {
        filter: {
          projectId: {
            eq: 'b6341425-7c7b-45bd-939a-dc15db168d62'
          }
        },
        order: {
          createdAt: 'DESC'
        }
      },
      context: {
        headers: {
          authorization: `Bearer ${cookies?.bearer ?? ''}`
        }
      }
    })
    .catch(() => null);

  const articles = query?.data?.listArticles?.items ?? [];

  return {
    me: me ?? {},
    articles: articles
  };
};

export default AuthAdmin;
