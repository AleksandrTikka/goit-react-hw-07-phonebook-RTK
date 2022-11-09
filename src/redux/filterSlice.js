import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

// Селектор
export const selectFilter = state => state.filter.filter;
// экшн
export const { filterContact } = filterSlice.actions;
// редюсер
export const filterReducer = filterSlice.reducer;
