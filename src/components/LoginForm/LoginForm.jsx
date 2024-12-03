import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./LoginForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";

const LoginForm = () => {
  const initialValues = {
    username: "",
    number: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    const newContact = {
      name: values.username,
      number: values.number,
    };
    dispatch(addContactThunk(newContact));
    options.resetForm();
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
      <h1>Registration field</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderSchema}
      >
        <Form className={styles.contactForm}>
          <label className={styles.labelForm}>
            <span>NAME</span>
            <Field
              className={styles.inputContactForm}
              name="username"
              type="text"
              placeholder="Enter your name..."
            />
            <ErrorMessage
              name="username"
              component="p"
              className={styles.error}
            ></ErrorMessage>
          </label>
          <label className={styles.labelForm}>
            <span>EMAIL</span>
            <Field
              placeholder="Enter your email..."
              className={styles.inputContactForm}
              type="tel"
              name="number"
            />
            <ErrorMessage
              name="number"
              component="p"
              className={styles.error}
            ></ErrorMessage>
          </label>
          <label className={styles.labelForm}>
            <span>PASSWORD</span>
            <Field
              placeholder="Enter your password..."
              className={styles.inputContactForm}
              type="tel"
              name="number"
            />
            <ErrorMessage
              name="number"
              component="p"
              className={styles.error}
            ></ErrorMessage>
          </label>
          <button className={styles.addButton} type="submit">
            REGISTER NOW
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
