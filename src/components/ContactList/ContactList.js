import React from 'react';
import { useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  // const dispatch = useDispatch();
  // const onDeleteContact = () => {
  //   dispatch(deleteContact);
  // };
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            // deleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
