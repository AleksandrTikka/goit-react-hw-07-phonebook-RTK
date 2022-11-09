import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './filterSlice';

import { contactsApi /*contactsReducer*/ } from './contactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
