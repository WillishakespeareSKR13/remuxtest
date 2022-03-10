import Cookies from 'js-cookie';
import {
  useLoaderData,
  LoaderFunction,
  MetaFunction,
  ActionFunction,
  redirect,
  Form,
  useTransition,
  Link
} from 'remix';
import AuthAdmin from '~/auth/_admin';
import { CREATEARTICLES } from '~/apollo/mutation/articles';
import {
  IArticle,
  ICreateArticleInput,
  IMember,
  IMutationFilter,
  IQueryFilter
} from '~/types';
import { client } from '~/apollo';
import { useQuery } from '@apollo/client';
import { ARTICLES } from '~/apollo/query/articles';

export const meta: MetaFunction = ({ data }) => {
  const user = data as useLoaderDataType;
  const { me } = user;
  return {
    title: `${me?.profile?.firstName} ${me?.profile?.lastName}`,
    description: `${me?.profile?.firstName} ${me?.profile?.lastName}`,
    'og:image': `${me?.profile?.photo}`
  };
};
export const loader: LoaderFunction = async (data) => AuthAdmin(data);

export const action: ActionFunction = async (DataFunction) => {
  const { request } = DataFunction;
  const formData = await request.formData();

  const title = formData.get('title');
  const content = formData.get('content');
  const image = formData.get('image');

  const query = await client
    .query<IMutationFilter<'loginMember'>>({
      query: CREATEARTICLES,
      variables: {
        input: {
          projectId: 'b6341425-7c7b-45bd-939a-dc15db168d62',
          categories: [],
          title: `${title}`,
          tags: [],
          photo: `${image}`,
          content: `${content}`,
          slug: '',
          seoTitle: '',
          seoDescription: '',
          seoKeywords: '',
          structuredMarking: '',
          status: 'PUBLISHED',
          releaseDate: '',
          imageAlt: ''
        } as ICreateArticleInput
      }
    })
    .catch((e) => e.response.data);
  console.log(query);

  return redirect('/login');
};

type useLoaderDataType = {
  me: IMember;
  articles: IArticle[];
};

export default function Index() {
  const transition = useTransition();
  const data = useLoaderData<useLoaderDataType>();
  const { me, articles } = data;
  const { data: ArticlesClient } = useQuery<IQueryFilter<'listArticles'>>(
    ARTICLES,
    {
      variables: {
        filter: {
          projectId: {
            eq: 'b6341425-7c7b-45bd-939a-dc15db168d62'
          }
        },
        order: {
          createdAt: 'DESC'
        }
      }
    }
  );
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      {me.id ? (
        <>
          <h1>Welcome to {me?.profile?.firstName}</h1>
          <p>{JSON.stringify(me)}</p>
          <button
            onClick={() => {
              Cookies.remove('bearer');
              window.location.reload();
            }}
          >
            logout
          </button>

          <div>
            <h1>Agregar articulo</h1>
            <Form method="post">
              <input type="text" placeholder="Titulo" name="title" />
              <input type="text" placeholder="Contenido" name="content" />
              <input type="text" placeholder="Imagen" name="image" />
              <button type="submit" disabled={!!transition.submission}>
                {transition.state === 'idle'
                  ? 'Crear Articulo'
                  : 'Creando Articulo...'}
              </button>
            </Form>
          </div>
        </>
      ) : (
        <Link
          to={`/login`}
          style={{
            width: '300px'
          }}
        >
          iniciar sesion
        </Link>
      )}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          wordBreak: 'break-word',
          gap: '50px'
        }}
      >
        {ArticlesClient?.listArticles?.items?.map((article) => (
          <Link
            to={`/article/${article.id}`}
            key={article.id}
            style={{
              width: '300px'
            }}
          >
            <h1>{article.title}</h1>
            <img src={article.photo} alt="" style={{ width: '100%' }} />
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </Link>
        ))}
      </div>
    </div>
  );
}
