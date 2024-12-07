import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import s from "./ContactsPage.module.css";

export default function ContactsPage() {
  return (
    <div className={s.main}>
      <h1 className={s.heading}>Contacts</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
