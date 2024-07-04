import FormRegister from "../components/Fragment/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";


const RegisterPage = () => {
    return (
        <div>
            <AuthLayout title="Register"></AuthLayout>
            <FormRegister></FormRegister>
        </div>
    );
};

export default RegisterPage;