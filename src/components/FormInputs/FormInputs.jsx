import { useState } from 'react';
import { FormInput, FormLabel } from './FormInputs.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsActions';
// import { addContact } from '../../redux/contactsReducer';

const FormInputs = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact)); //  экшен для нового контакта

    setName(''); // Очищаем поле ввода имени
    setNumber(''); // Очищаем поле ввода номера
  };

  return (
    <FormInput onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ]?)?[a-zA-Zа-яА-Я ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <input
          type="tel"
          name="number"
          pattern="^\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </FormLabel>
      <button type="submit">Add contact</button>
    </FormInput>
  );
};

export default FormInputs;
