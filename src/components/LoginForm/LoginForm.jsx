import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./LoginForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };

  const onlyWords = /^[a-zA-Z\s]+$/;

  const orderSchema = Yup.object().shape({
    username: Yup.string()
      .matches(onlyWords, "ONLY WORDS PLEASE")
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("This field is required!"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("This field is required!"),
  });

  return (
    <>
      <h1 className={styles.heading}>Sign in</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderSchema}
      >
        <Form className={styles.loginForm}>
          <label className={styles.labelForm}>
            <span>EMAIL</span>
            <Field
              placeholder="Enter your email..."
              className={styles.inputLoginForm}
              type="email"
              name="email"
            />
            <ErrorMessage
              name="email"
              component="p"
              className={styles.error}
            ></ErrorMessage>
          </label>
          <label className={styles.labelForm}>
            <span>PASSWORD</span>
            <Field
              placeholder="Enter your password..."
              className={styles.inputLoginForm}
              type="password"
              name="password"
            />
            <ErrorMessage
              name="password"
              component="p"
              className={styles.error}
            ></ErrorMessage>
          </label>
          <button className={styles.addButton} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
