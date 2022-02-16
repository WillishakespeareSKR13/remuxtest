import { LoaderFunction, redirect } from 'remix';
import { GraphQLME } from './__auth';

const getDestination = (destination?: string) => {
  switch (destination) {
    case 'owner':
      return '/';
    case 'superadmin':
      return '/';
    case 'partner':
      return '/';
    case 'partneruser':
      return '/';
    default:
      return '/';
  }
};

const AuthLogin: LoaderFunction = async ({ request }) => {
  const me = await GraphQLME(request);
  if (me) {
    const level = me.memberRoles?.[0]?.role.codeName.replace(/'_'/g, '');
    return redirect(getDestination(level));
  }

  return {};
};

export default AuthLogin;
