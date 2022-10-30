import { Box } from '../Box';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from 'redux/contactsSlice';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { GlobalStyle } from '../GlobalStyle';

import Section from '../Section';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleFormSubmit = ({ name, number }) => {
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(name, number));
  };

  return (
    <Box
      textAlign="center"
      bg="bgApp"
      pt={4}
      mx="auto"
      mt="50px"
      width="500px"
      flexWrap="wrap"
      justifyContent="center"
      border="normal"
      borderRadius="md"
      borderColor="border"
      as="main"
    >
      <Box as="h1" textAlign="center" color="heading" fontSize="l">
        Phonebook
      </Box>
      <Section>
        <ContactForm onSubmit={handleFormSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>

      <GlobalStyle />
    </Box>
  );
}
export default App;
