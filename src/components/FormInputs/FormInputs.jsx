import { useState } from 'react';
import { FormInput, FormLabel } from './FormInputs.styled';

const FormInputs = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    onSubmit({ name, number });

    setName('');
    setNumber('');
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
// class FormInputs extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);

//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <FormInput onSubmit={this.handleSubmit}>
//         <FormLabel>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+((['\-][a-zA-Zа-яА-Я ]?)?[a-zA-Zа-яА-Я ]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </FormLabel>
//         <FormLabel>
//           Number
//           <input
//             type="tel"
//             name="number"
//             pattern="^\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
//         </FormLabel>
//         <button type="submit">Add contact</button>
//       </FormInput>
//     );
//   }
// }

// export default FormInputs;
