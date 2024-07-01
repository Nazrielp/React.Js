import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragment/FormLogin";


const LoginPage = () => {
    return (
            <AuthLayouts title="Login">
                <FormLogin></FormLogin>
            </AuthLayouts>
    );
};

export default LoginPage;