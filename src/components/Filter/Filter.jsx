import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
// import PropTypes from 'prop-types';

import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  //! selectors.js
  const filter = useSelector(state => state.filter);

  // const handleFilterContacts = ({ currentTarget: { value } }) => {
  //   dispatch(filterContacts(value));
  // };

  return (
    <label>
      Find contact by name:
      <Input
        type="text"
        value={filter}
        onChange={({ currentTarget: { value } }) => {
          dispatch(filterContacts(value));
        }}
      />
    </label>
  );
};

// Filter.propTypes = {
//   search: PropTypes.string.isRequired,
//   onSearch: PropTypes.func.isRequired,
// };
