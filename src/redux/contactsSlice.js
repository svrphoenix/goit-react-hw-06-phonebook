import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { data: [] },
  reducers: {
    addContact(state, action) {
      state.data.push({ ...action.payload, id: nanoid() });
    },
    deleteContact(state, action) {
      state.data = state.data.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
