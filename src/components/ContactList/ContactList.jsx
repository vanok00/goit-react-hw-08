import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

import Loader from "../Loader/Loader";
import {
  selectFilteredContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  const loading = useSelector(selectIsLoading);
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectIsError);

  return (
    <div>
      <ul className={styles.contactList}>
        {loading && <Loader />}
        {error && <h2>LOADING OR AN ERROR</h2>}
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
// {error && <h2>LOADING OR AN ERROR</h2>}
