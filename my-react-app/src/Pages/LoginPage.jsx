import FormLogin from '../components/Fragment/FormLogin';
import AuthLayout from '../components/Layouts/AuthLayout';

const LoginPage = () => {
  return (
      <AuthLayout title="Login">
        <FormLogin />
      </AuthLayout>
  );
};

export default LoginPage;
