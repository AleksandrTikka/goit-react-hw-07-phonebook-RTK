import { Box } from '../Box';
import { useDispatch, useSelector } from 'react-redux';
// import ContactForm from '../ContactForm';
// import Filter from '../Filter';
// import ContactList from '../ContactList';
import { GlobalStyle } from '../GlobalStyle';

import Section from '../Section';
import { getContacts } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations.js';

function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box
      textAlign="center"
      bg="bgApp"
      pt={4}
      mx="auto"
      mt="50px"
      width="400px"
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
      <Section>{/* <ContactForm /> */}</Section>
      <Section title="Contacts">
        {/* <Filter /> */}
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        <p>{items.length > 0 && JSON.stringify(items)}</p>
      </Section>

      <GlobalStyle />
    </Box>
  );
}
export default App;
