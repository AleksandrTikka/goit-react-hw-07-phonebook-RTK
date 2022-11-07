import { Box } from '../Box';
// import { useDispatch /*useSelector*/ } from 'react-redux';
// import ContactForm from '../ContactForm';
import { useFetchContactsQuery } from 'redux/contactsSlice';
// import Filter from '../Filter';

import { GlobalStyle } from '../GlobalStyle';

import Section from '../Section';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations.js';
import ContactList from 'components/ContactList';

function App() {
  const { data, isFetching } = useFetchContactsQuery();
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  // dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <Box
      textAlign="center"
      bg="bgApp"
      pt={4}
      mx="auto"
      mt="50px"
      width="450px"
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
      {/* <Section>{<ContactForm />}</Section> */}
      <Section title="Contacts">
        {/* <Filter /> */}
        {isFetching && <p>Loading contacts...</p>}
        {/* {error && <p>{error}</p>} */}
        {data && <ContactList contacts={data} />}
      </Section>

      <GlobalStyle />
    </Box>
  );
}
export default App;
