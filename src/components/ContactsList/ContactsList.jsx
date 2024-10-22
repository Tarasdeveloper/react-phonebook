import { useDispatch, useSelector } from 'react-redux';
import { ContactItem, ContactList } from './ContactsList.styled';
import { useEffect } from 'react';

import { deleteContact, getContacts } from '../../redux/contactsReducer';

const ContactsList = () => {
  const { contacts, filterTerm } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes((filterTerm || '').toLowerCase())
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
