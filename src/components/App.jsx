import Title from './Title/Title';
import ContactsList from './ContactsList/ContactsList';
import FormInputs from './FormInputs/FormInputs';
import Wrapper from './Wrapper/Wrapper';
import Filter from './Filter/Filter';

function App() {
  return (
    <Wrapper>
      <Title props="Phonebook" />
      <FormInputs />
      <Title props="Contacts" />
      <Filter />
      <ContactsList />
    </Wrapper>
  );
}
export default App;

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = data => {
//     const contact = {
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//     };
//     // this.setState(({ contacts }) => ({
//     //   contacts: [contact, ...contacts],
//     // }));

//     this.state.contacts.some(
//       elem => contact.name.toLowerCase() === elem.name.toLowerCase()
//     )
//       ? alert(`${contact.name} is already in contacts.`)
//       : this.setState(prevState => ({
//           contacts: [contact, ...prevState.contacts],
//         }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <Wrapper>
//         <Title props="Phonebook" />
//         <FormInputs onSubmit={this.addContact} />
//         <Title props="Contacts" />
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
//         <ContactsList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </Wrapper>
//     );
//   }
// }
