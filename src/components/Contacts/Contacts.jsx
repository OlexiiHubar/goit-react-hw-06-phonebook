import css from './Contacts.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { getContacts } from 'redux/redux/contacts/contactsSlice';
import { getFilter } from 'redux/redux/filter/filterSlice';
import DeleteButton from 'components/DeleteButton';

export default function Contacts() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getfilteredContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  const filteredContactsList = getfilteredContacts();

  if (!filteredContactsList.length) {
    return;
  }
  return (
    <ul className={css.list}>
      {filteredContactsList.map(({ number, name, id }) => {
        return (
          <li className={css.contact} key={number}>
            <span className={css.name}>{name}</span>
            <span>{number}</span>
            <DeleteButton id={id} />
          </li>
        );
      })}
    </ul>
  );
}