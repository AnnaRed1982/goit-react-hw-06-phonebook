import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import PropTypes from 'prop-types';

export const Filter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const onCnange = evt => dispatch(setFilter(evt.target.value));

  console.log('filter', filter);
  return (
    <label htmlFor="filter">
      Find contact by name
      <input type="text" name="filter" value={filter} onChange={onCnange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
