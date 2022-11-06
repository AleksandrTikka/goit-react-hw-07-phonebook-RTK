import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

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
