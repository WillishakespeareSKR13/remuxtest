import { LoaderFunction } from 'remix';
import { GraphQLME } from './__auth';

const AuthDefault: LoaderFunction = async ({ request }) => {
  const me = await GraphQLME(request);

  return { me };
};

export default AuthDefault;
