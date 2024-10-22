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
