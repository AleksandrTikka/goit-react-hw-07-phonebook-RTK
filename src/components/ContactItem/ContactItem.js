import { Btn } from '../App/App.styled';
import { Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item>
      {name}: {number}
      <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Btn>
    </Item>
  );
};

export default ContactItem;
