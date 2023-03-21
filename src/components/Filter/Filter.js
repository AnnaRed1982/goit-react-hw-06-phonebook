import PropTypes from 'prop-types';

export const Filter = ({ value, onCnange }) => {
  return (
    <label htmlFor="filter">
      Find contact by name
      <input type="text" name="filter" value={value} onChange={onCnange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}