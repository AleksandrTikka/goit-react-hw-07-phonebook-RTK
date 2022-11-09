import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { fetchContacts, addContact, deleteContact } from './operations';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63618fa4af66cc87dc2e4a28.mockapi.io',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
    }),
  }),
  deleteContact: builder.mutation({
    query: contactId => ({
      url: `/contacts/${contactId}`,
      method: 'DELETE',
    }),
  }),
});
export const { useFetchContactsQuery, useDeleteContactMutation } = contactsApi;

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const contactInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
//   filter: '',
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactInitialState,

//   reducers: {
//     filterContact(state, action) {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchContacts.rejected]: handleRejected,
//     [addContact.pending]: handlePending,
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addContact.rejected]: handleRejected,
//     [deleteContact.pending]: handlePending,
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const idx = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splice(idx, 1);
//     },
//     [deleteContact.rejected]: handleRejected,
//   },
// });

// export const { filterContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
