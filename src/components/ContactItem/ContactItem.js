import { Btn } from '../App/App.styled';
import { Item } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/operations';
import { SyncLoader } from 'react-spinners';

import PropTypes from 'prop-types';

const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  // const dispatch = useDispatch();

  return (
    <Item>
      {name}: {number}
      <Btn
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting && <SyncLoader />} Delete
      </Btn>
    </Item>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
