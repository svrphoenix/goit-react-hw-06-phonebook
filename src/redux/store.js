import { configureStore } from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
//!-----------------------------------------------------------------------
// import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// const contactsInitialState = [
//   { name: 'ser', number: '+380675679186', id: 'MNV1L8ams3c63QtvmbolL' },
//   {
//     name: 'Руденко Сергій Васильович',
//     number: '+380675679186',
//     id: 'Od4ifXA2CskLDFmcwa2XU',
//   },
//   { name: 'Serhii', number: '+380675679186', id: 'FQrp777VeIrjhLg780MDF' },
// ];

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact(state, action) {
//       state.push(action.payload);
//     },
//     deleteContact(state, action) {
//       return state.filter(({ id }) => id !== action.payload);
//     },
//   },
// });

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     filterContacts(_, action) {
//       return action.payload;
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const { filterContacts } = filterSlice.actions;
//!-----------------------OLD-----------------------------
// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');
// export const filterContacts = createAction('filter/filterContacts');

// const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

// const filterReducer = createReducer('', {
//   [filterContacts]: (state, action) => (state = action.payload),
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
