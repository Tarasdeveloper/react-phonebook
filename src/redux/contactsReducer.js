import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare: contactData => ({
        payload: {
          id: nanoid(),
          ...contactData,
        },
      }),
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// const phonebookSlice = createSlice({
//   name: 'phonebook',
//   initialState,
//   reducers: {
//     addContact: {
//       reducer: (state, action) => {
//         state.contacts.push(action.payload);
//       },
//       prepare: contactData => ({
//         payload: {
//           id: nanoid(),
//           ...contactData,
//         },
//       }),
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     setFilterTerm: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });
