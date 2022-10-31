import { Box } from '../Box';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { GlobalStyle } from '../GlobalStyle';

import Section from '../Section';

function App() {
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
