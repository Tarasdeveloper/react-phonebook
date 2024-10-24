// import { useEffect } from 'react';
// import { deleteContact, getContacts } from '../../redux/contactsActions';
import { useSelector } from 'react-redux';
import { ContactItem, ContactList } from './ContactsList.styled';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsQuery';

const ContactsList = () => {
  const { data: contacts = [], error, isLoading } = useGetContactsQuery();
  const [deleteContact, delInfo] = useDeleteContactMutation();
  // const { contacts, filterTerm, isFetching } = useSelector(
  //   state => state.phonebook
  // );
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getContacts());
  // }, [dispatch]);

  // const onDeleteContact = contactId => {
  //   dispatch(deleteContact(contactId));
  // };
  const filterValue = useSelector(state => state.phonebook.filterTerm);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes((filterValue || '').toLowerCase())
  );

  return (
    <ContactList>
      {delInfo.isLoading && <h3>Deleting...</h3>}
      {isLoading && <h3>Loading data...</h3>}
      {filteredContacts.length === 0 && !isLoading && (
        <p>There are no contacts found!</p>
      )}
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <p>{name} :</p> {number}
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </ContactItem>
      ))}
      {error && <h2>Error</h2>}
    </ContactList>
  );
};

export default ContactsList;
