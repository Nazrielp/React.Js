import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>

      <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"></InputForm>

      <InputForm label="Password" type="password" placeholder="********" name="password"></InputForm>

      <Button className="bg-blue-600 w-full" type="submit">Login</Button>
    </form>
  );
};

export default FormLogin;