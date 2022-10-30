import { Btn } from '../App/App.styled';
import { Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
// import PropTypes from 'prop-types';
const ContactItem = contact => {
  const dispatch = useDispatch();

  return (
    <Item>
      {contact.name}: {contact.number}
      <Btn type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Btn>
    </Item>
  );
};
// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string,
//   number: PropTypes.string.isRequired,
// };

export default ContactItem;
