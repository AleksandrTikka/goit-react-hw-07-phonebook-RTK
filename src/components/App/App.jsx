// import { useState, useEffect } from 'react';
import { Box } from '../Box';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { GlobalStyle } from '../GlobalStyle';

import Section from '../Section';

function App() {
  // const getVisibleContacts = () => {
  //   const normalizeFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const contacts = useSelector(state => state.contacts.items);

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
        <ContactForm />
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
