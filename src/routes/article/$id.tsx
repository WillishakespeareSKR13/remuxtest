import { IArticle, IMember } from '@ixulabs/ui';
import Cookies from 'js-cookie';
import { useLoaderData, LoaderFunction, MetaFunction, Link } from 'remix';
import AuthArticle from '~/auth/_article';

export const meta: MetaFunction = ({ data }) => {
  const user = data as useLoaderDataType;
  const { me, article } = user;
  return {
    title: `${article.title}`,
    description: `${article.content}`,
    image: `${article.photo}`
  };
};
export const loader: LoaderFunction = async (data) => AuthArticle(data);

type useLoaderDataType = {
  me: IMember;
  article: IArticle;
};

export default function Index() {
  const data = useLoaderData<useLoaderDataType>();
  const { me, article } = data;
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h1>Welcome to {me?.profile?.firstName}</h1>
      <button
        onClick={() => {
          Cookies.remove('bearer');
          window.location.reload();
        }}
      >
        logout
      </button>
      <Link to={`/`}>regresar</Link>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          wordBreak: 'break-word'
        }}
      >
        <h1>{article.title}</h1>
        <img src={article.photo} alt="" style={{ width: '500px' }} />
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </div>
  );
}
