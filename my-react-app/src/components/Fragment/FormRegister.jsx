import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">

      <InputForm label="Fullname" type="text" placeholder="Insert your name" name="fullname"></InputForm>

      <InputForm label="Email" type="email" placeholder="zrielp@gmail.com" name="email"></InputForm>

      <InputForm label="Password" type="password" placeholder="********" name="password"></InputForm>

      <InputForm label="Confirm Password" type="password" placeholder="********" name="confirmpassword"></InputForm>

      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;