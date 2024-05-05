import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required!"),
  email: Yup.string().required("Email is required!"),
  password: Yup.string().min(3, "Too Short!").required("Password is required!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const emailInputId = nanoid();
  const passwordInpurId = nanoid();

  const nameInputId = nanoid();

  const onRegister = (formData) => {
    dispatch(register(formData));
  };

  const handleSubmit = (value, actions) => {
    onRegister(value);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterFormSchema}
    >
      <Form>
        <label className={css.label} htmlFor={nameInputId}>
          <span>Name</span>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameInputId}
            placeholder="Oleksandr Somebody"
          />
          <span className={css.errorMsg}>
            <ErrorMessage name="name" as="span" />
          </span>
        </label>

        <label className={css.label} htmlFor={emailInputId}>
          <span>Email</span>
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
          <span>Password</span>
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
          Registration
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
