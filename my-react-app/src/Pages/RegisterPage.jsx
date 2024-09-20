import FormRegister from '../components/Fragment/FormRegister';
import AuthLayout from '../components/Layouts/AuthLayout';


const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
