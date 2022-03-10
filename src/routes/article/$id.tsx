import { useQuery } from '@apollo/client';
import Cookies from 'js-cookie';
import { useLoaderData, LoaderFunction, MetaFunction, Link } from 'remix';
import { GETARTICLEBYID } from '~/apollo/query/articles';
import AuthArticle from '~/auth/_article';
import { IArticle, IMember, IQueryFilter } from '~/types';

export const meta: MetaFunction = ({ data }) => {
  const user = data as useLoaderDataType;
  const { me, article } = user;
  return {
    title: `${article.title}`,
    description: `${article.content}`,
    'og:image': `${article.photo}`
  };
};
export const loader: LoaderFunction = async (data) => AuthArticle(data);

type useLoaderDataType = {
  me: IMember;
  article: IArticle;
  id: string;
};

export default function Index() {
  const { id, me } = useLoaderData<useLoaderDataType>();
  const { data } = useQuery<IQueryFilter<'articleById'>>(GETARTICLEBYID, {
    variables: {
      id: id,
      viewed: false
    }
  });
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {me.id ? (
        <>
          <h1>Welcome to {me?.profile?.firstName}</h1>
          <button
            onClick={() => {
              Cookies.remove('bearer');
              window.location.reload();
            }}
          >
            logout
          </button>
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
      <Link to={`/`}>regresar</Link>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          wordBreak: 'break-word'
        }}
      >
        <h1>{data?.articleById?.title}</h1>
        <img src={data?.articleById?.photo} alt="" style={{ width: '500px' }} />
        <div
          dangerouslySetInnerHTML={{ __html: data?.articleById?.content ?? '' }}
        />
      </div>
    </div>
  );
}
