import FormLogin from "../components/Fragment/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";


const LoginPage = () => {
    return (
        <div>
            <AuthLayout title="Login"></AuthLayout>
            <FormLogin></FormLogin>
        </div>
    );
};

export default LoginPage;