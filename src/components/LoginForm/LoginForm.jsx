import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./LoginForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginForm = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };

  // if (isLoggedIn)
  // {
  //   return <Navigate to "contacts"/>
  // }

  const orderSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("This field is required!"),
    password: Yup.string()
      .min(6, "Password is too short!")
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
