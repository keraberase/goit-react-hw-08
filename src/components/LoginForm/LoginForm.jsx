import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const RegisterFormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required!"),
  password: Yup.string().min(3, "Too Short!").required("Password is required!"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailInputId = nanoid();
  const passwordInpurId = nanoid();

  const onLogin = (formData) => {
    dispatch(login(formData));
  };

  const handleSubmit = (value, actions) => {
    onLogin(value);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterFormSchema}
    >
      <Form>
        <label className={css.label} htmlFor={emailInputId}>
          <span className={css.labelText}>Email</span>
          <Field
            className={css.field}
            type="text"
            name="email"
            id={emailInputId}
            placeholder="email@example.com"
          />
          <span className={css.errorMsg}>
            <ErrorMessage name="email" as="span" />
          </span>
        </label>

        <label className={css.label} htmlFor={passwordInpurId}>
          <span className={css.labelTextPassword}>Password</span>
          <Field
            className={css.field}
            type="password"
            name="password"
            id={passwordInpurId}
            placeholder="password"
          />
          <span className={css.errorMsg}>
            <ErrorMessage name="password" as="span" />
          </span>
        </label>

        <button className={css.formBtn} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
