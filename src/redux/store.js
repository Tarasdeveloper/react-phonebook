import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsReducer';
import { filtersReducer } from './filterReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phonebookPersistConfig = {
  key: 'numbers',
  storage,
  blacklist: ['filter'], // Only persist contacts, not the filter term
};

export const store = configureStore({
  reducer: {
    phonebook: persistReducer(phonebookPersistConfig, contactsReducer),
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
