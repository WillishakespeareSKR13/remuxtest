import {
  redirect,
  Form,
  ActionFunction,
  LoaderFunction,
  useTransition,
  createCookie
} from 'remix';
import { GraphQLClient } from 'graphql-request';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import * as cookie from 'cookie';
import CONFIG from '~/config';
import { LOGIN } from '~/apollo/mutation/login';
import AuthLogin from '~/auth/_login';
import { IMutationFilter } from '~/types';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
  }
`;

const Input = styled(motion.input)`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 10px;
  background-color: #f0a58b;
  color: #fff;
  cursor: pointer;
`;

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 }
};

const AnimationButton = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } },
  whileTap: { scale: 0.98, opacity: 0.8 }
};

export const loader: LoaderFunction = async (data) => AuthLogin(data);

export const createBearer = createCookie('bearer', {
  maxAge: 604_800
});

export const action: ActionFunction = async (DataFunction) => {
  const { request } = DataFunction;
  const formData = await request.formData();

  const username = formData.get('username');
  const password = formData.get('password');

  const getCookie = request.headers.get('Cookie');
  const bearer = cookie.parse(getCookie || '').bearer;
  const graphQLClient = new GraphQLClient(CONFIG.GRAPHQL_URL, {
    headers: {
      authorization: `Bearer ${bearer}`
    }
  });

  const query = await graphQLClient
    .request<IMutationFilter<'loginMember'>>(LOGIN, {
      input: {
        email: username,
        password: password
      }
    })
    .catch(() => null);
  if (query) {
    const { loginMember } = query;
    return redirect('/login', {
      headers: {
        'Set-Cookie': `bearer=${loginMember.accessToken};`
      }
    });
  }

  return redirect('/login');
};

const PageLogin = () => {
  const transition = useTransition();
  return (
    <Wrapper>
      <Form method="post">
        <Input
          {...Animation}
          type="text"
          placeholder="Username"
          name="username"
        />
        <Input
          {...Animation}
          type="password"
          placeholder="Password"
          name="password"
        />
        <Button
          {...AnimationButton}
          type="submit"
          disabled={!!transition.submission}
        >
          {transition.state === 'idle' ? 'Login' : 'Logging in...'}
        </Button>
      </Form>
    </Wrapper>
  );
};

export default PageLogin;
