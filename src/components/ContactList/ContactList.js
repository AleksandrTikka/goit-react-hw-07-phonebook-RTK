import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import { selectFilter } from 'redux/filterSlice';

// import { selectVisibleContacts } from 'redux/selectors';
const ContactList = ({ contacts }) => {
  const filter = useSelector(selectFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
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
