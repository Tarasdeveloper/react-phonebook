import { useDispatch, useSelector } from 'react-redux';
import { ContactItem, ContactList } from './ContactsList.styled';
import { deleteContact } from '../../redux/contactsReducer';

const ContactsList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filtered = useSelector(state => state.filters.filters);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </ContactItem>
      ))}
    </ContactList>
  );
};

export default ContactsList;
