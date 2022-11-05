import { createSlice } from '@reduxjs/toolkit';
//import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import { persistReducer } from 'redux-persist';
const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  filter: '',

  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // addContact: {
    //   reducer(state, action) {
    //     state.items.push(action.payload);
    //   },
    //   prepare({ name, number }) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },

    // deleteContact(state, action) {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
    // getVisibleContact(state, action) {
    //   state.filter = action.payload;
    // },
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  // getVisibleContact,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
// selectors
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
