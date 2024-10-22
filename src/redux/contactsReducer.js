import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6713be1f690bf212c75f994f.mockapi.io';

// Async actions (thunks)
export const getContacts = createAsyncThunk(
  'phonebook/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', body);
      const { id, name, number } = data;
      return { id, name, number };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Slice
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
