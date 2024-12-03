import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import styles from "./App.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";
import { selectIsLoading } from "../../redux/contactsSliсe.js";
import Loader from "../Loader/Loader.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
import RegisterForm from "../RegisterForm/RegisterForm.jsx";

export default function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={styles.fullMenu}>
      {/* {isLoading && <h2>Loading...</h2>} */}
      <div className={styles.book}>{/* <h1>Phonebook</h1> */}</div>
      {/* <ContactForm /> */}
      {/* <div className={styles.menu}>
        <h2>Login</h2>
        <h2>Registration</h2>
      </div> */}
      <LoginForm />
      {/* <RegisterForm /> */}
      {/* <SearchBox /> */}
      {/* {error && <h2>THERE WAS EN ERROR</h2>} */}
      {/* <ContactList /> */}
    </div>
  );
}
