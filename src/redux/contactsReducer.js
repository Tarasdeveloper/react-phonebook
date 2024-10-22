import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './contactsActions';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filterTerm: '',
    isFetching: false,
    error: null,
  },
  reducers: {
    setFilterTerm: (state, action) => {
      state.filterTerm = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        state.isFetching = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isFetching = false;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.isFetching = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isFetching = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
        state.isFetching = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isFetching = false;
      })
      .addCase(addContact.pending, state => {
        state.isFetching = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts = [...state.contacts, action.payload];
        state.isFetching = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isFetching = false;
      });
  },
});

// Export actions and reducer
export const { setFilterTerm } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
