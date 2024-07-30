import { ContactItem, ContactList } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactList>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </ContactItem>
      ))}
    </ContactList>
  );
};

export default ContactsList;
