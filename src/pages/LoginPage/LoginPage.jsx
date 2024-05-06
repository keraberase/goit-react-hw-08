import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const LoginFormPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginFormPage;
