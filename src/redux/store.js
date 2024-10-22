import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './contactsReducer';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});
