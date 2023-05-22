// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { List, Contact, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  //! selectors.js
  const contacts = useSelector(state => state.contacts.data);
  const searchFilter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    if (contacts.length > 0) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }
  };

  // const handleDeleteContact = contactId => {
  //   // setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
  //   dispatch(deleteContact(contactId));
  // };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(item => (
        <Contact key={item.id}>
          <p>{item.name}</p>
          <p>{item.number}</p>
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(item.id))}
          >
            Delete
          </Button>
        </Contact>
      ))}
    </List>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
