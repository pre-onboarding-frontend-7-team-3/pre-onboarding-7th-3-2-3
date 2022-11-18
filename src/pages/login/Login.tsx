import LoginForm from '../../components/LoginForm/LoginForm';
import SEO from '../../components/common/SEO/SEO';

const Login = () => {
  const title = '디셈버앤컴퍼니';
  return (
    <>
      <SEO title={title} />
      <LoginForm />
    </>
  );
};

export default Login;
