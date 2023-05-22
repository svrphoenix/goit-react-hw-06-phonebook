import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { List, Contact, Button } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const searchFilter = useSelector(getFilter);

  const getVisibleContacts = () => {
    if (contacts.length === 0) {
      return null;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchFilter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(item => (
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
