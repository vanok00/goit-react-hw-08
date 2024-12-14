import styles from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
const Contact = ({ id, contact, text }) => {
  const dispatch = useDispatch();
  const notify = () => toast("Successfully deleted contact");
  return (
    <div className={styles.contactLi}>
      <div className={styles.nameNumbs}>
        <div className={styles.nameNumb}>
          <IoPersonSharp size="24" />{" "}
          <p className={styles.contactName}>{contact.name}</p>
        </div>
        <div className={styles.nameNumb}>
          <FaPhoneAlt size="24" />{" "}
          <p className={styles.contactNumber}>{contact.number}</p>
        </div>
      </div>
      <div>
        <button
          className={styles.editButton}
          onClick={() =>
            dispatch(
              editContact({ id, text: prompt("Enter new value: ") ?? text })
            )
          }
        >
          Edit
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => {
            notify();
            dispatch(deleteContact(contact.id));
          }}
          type="submit"
        >
          Delete
        </button>
        <Toaster />
      </div>
    </div>
  );
};
export default Contact;
