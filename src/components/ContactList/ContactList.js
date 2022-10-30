import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/contactsSlice';
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const getNewContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const newContacts = getNewContacts();

  return (
    <List>
      {newContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </List>
  );
};
ContactList.propTypes = {
  contact: PropTypes.shape({
    key: PropTypes.string.isRequired,
  }),
};

export default ContactList;
