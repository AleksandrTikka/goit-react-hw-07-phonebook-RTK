import { Btn } from '../App/App.styled';
import { Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      {name}: {number}
      <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
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
