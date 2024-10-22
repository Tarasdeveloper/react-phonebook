// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://6713be1f690bf212c75f994f.mockapi.io';

// export const getContacts = createAsyncThunk(
//   'phonebook/getContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('/contacts');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'phonebook/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(`/contacts/${contactId}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'phonebook/addContact',
//   async (body, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/contacts', body);
//       const { id, name, number } = data;
//       return { id, name, number };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
