// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

// import { addContact, deleteContact } from 'redux/contactsSlice';
// import { filterContacts } from 'redux/filterSlice';
import { GlobalStyles } from './GlobalStyle';
import { Global } from '@emotion/react';
import { Layout } from './Layout/Layout';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { Title } from './Title/Title';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  // const dispatch = useDispatch();
  // //! selectors.js
  // const contacts = useSelector(state => state.contacts.data);
  // const filter = useSelector(state => state.filter);

  // const handleAddContact = newContact => {
  //   let isContactName = false;
  //   if (contacts.length > 0) {
  //     isContactName = contacts.find(
  //       ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
  //     );
  //   }

  //   if (isContactName) {
  //     toast.error(
  //       `Name "${newContact.name.toUpperCase()}" is alredy in contacts`
  //     );
  //     return;
  //   }
  //   // setContacts(prevContacts => [...prevContacts, newContact]);
  //   dispatch(addContact(newContact));
  // };

  // const handleFilterContacts = ({ currentTarget: { value } }) => {
  //   // setFilter(value);
  //   dispatch(filterContacts(value));
  // };

  // const getVisibleContacts = () => {
  //   if (contacts.length > 0) {
  //     return contacts.filter(({ name }) =>
  //       name.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   }
  // };

  // const handleDeleteContact = contactId => {
  //   // setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
  //   dispatch(deleteContact(contactId));
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <main>
      <h1>Phonebook</h1>
      <Layout>
        {/* <FormAddContact onSubmit={handleAddContact} /> */}
        <FormAddContact />
      </Layout>
      <Layout>
        <Title title="Contacts" />
        <Filter />
        {/* {visibleContacts && ( */}
        <ContactList
        // contacts={visibleContacts}
        // onDelete={handleDeleteContact}
        />
        {/* )} */}
      </Layout>
      <Toaster position="top-right" reverseOrder={false} />
      <Global styles={GlobalStyles} />
    </main>
  );
};
