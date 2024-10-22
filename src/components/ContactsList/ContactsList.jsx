import { useDispatch, useSelector } from 'react-redux';
import { ContactItem, ContactList } from './ContactsList.styled';
import { useEffect } from 'react';
import { deleteContact, getContacts } from '../../redux/contactsActions';

const ContactsList = () => {
  const { contacts, filterTerm, isFetching } = useSelector(
    state => state.phonebook
  );
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
      {isFetching && <h3>Loading data...</h3>}
      {contacts.length === 0 && !isFetching && (
        <p>There are no contacts found!</p>
      )}
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <p>{name} :</p> {number}
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </ContactItem>
      ))}
    </ContactList>
  );
};

export default ContactsList;
