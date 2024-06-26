import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from "./list.module.css";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  console.log(filteredContacts);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Contact List</h2>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};
