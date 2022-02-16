import {
  IArticle,
  ICreateArticleInput,
  IMember,
  IMutationFilter
} from '@ixulabs/ui';
import { GraphQLClient } from 'graphql-request';
import Cookies from 'js-cookie';
import * as cookie from 'cookie';
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
import CONFIG from '~/config';
import { CREATEARTICLES } from '~/apollo/mutation/articles';

export const meta: MetaFunction = ({ data }) => {
  const user = data as useLoaderDataType;
  const { me } = user;
  return {
    title: `${me?.profile.firstName} ${me?.profile.lastName}`,
    description: `${me?.profile.firstName} ${me?.profile.lastName}`,
    image: me?.profile.photo
  };
};
export const loader: LoaderFunction = async (data) => AuthAdmin(data);

export const action: ActionFunction = async (DataFunction) => {
  const { request } = DataFunction;
  const formData = await request.formData();

  const title = formData.get('username');
  const content = formData.get('password');

  const getCookie = request.headers.get('Cookie');
  const bearer = cookie.parse(getCookie || '').bearer;
  const graphQLClient = new GraphQLClient(CONFIG.GRAPHQL_URL, {
    headers: {
      authorization: `Bearer ${bearer}`
    }
  });

  await graphQLClient
    .request<IMutationFilter<'loginMember'>>(CREATEARTICLES, {
      input: {
        projectId: 'b6341425-7c7b-45bd-939a-dc15db168d62',
        categories: [],
        title: '',
        tags: [],
        photo: '',
        content: '',
        slug: '',
        seoTitle: '',
        seoDescription: '',
        seoKeywords: '',
        structuredMarking: '',
        status: 'PUBLISHED',
        releaseDate: '',
        imageAlt: ''
      } as ICreateArticleInput
    })
    .catch(() => null);

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
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to {me.profile.firstName}</h1>
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
          <button type="submit" disabled={!!transition.submission}>
            {transition.state === 'idle'
              ? 'Crear Articulo'
              : 'Creando Articulo...'}
          </button>
        </Form>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          wordBreak: 'break-word',
          gap: '50px'
        }}
      >
        {articles?.map((article) => (
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
