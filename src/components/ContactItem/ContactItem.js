import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import PropTypes from 'prop-types';
import css from 'components/ContactItem/ContacItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.item}>
      <p>{name}:</p>
      <p>{number}</p>

      <button className={css.delete} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
