import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initialContacts,
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const compareContact = state.items.find(
        contact => contact.name.toLowerCase() === action.payload.toLowerCase()
      );
      compareContact
        ? alert(`${action.payload} is already in contacts`)
        : state.items.push(action.payload);
    },
    prepare(name, number) {
      return {
        payload: {
          id: nanoid,
          name,
          number,
        },
      };
    },
    deleteContact(state, action) {
      state.items.filter(contact => contact.id !== action.payload);
    },
    getVisibleContact(state, action) {
      state.filter(contact => contact === action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
