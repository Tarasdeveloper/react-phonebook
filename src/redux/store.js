import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './contactsReducer';
import { contactsApi } from './contactsQuery';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
