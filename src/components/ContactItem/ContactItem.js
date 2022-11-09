import { Btn } from '../App/App.styled';
import { Item } from './ContactItem.styled';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
const ContactItem = ({ name, number, id, deleteContact, deleting }) => {
  // const dispatch = useDispatch();

  return (
    <Item>
      {name}: {number}
      <Btn type="button" onClick={() => deleteContact(id)}>
        {deleting ? 'Deleting' : 'Delete'}
        Delete
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
