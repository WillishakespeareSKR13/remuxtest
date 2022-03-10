import Cookies from 'cookie';

const AuthApollo = (request: Request) => {
  const cookies = Cookies.parse(request.headers.get('cookie') ?? '');
  return {
    context: {
      headers: {
        authorization: `Bearer ${cookies?.bearer ?? ''}`
      }
    }
  };
};

export default AuthApollo;
