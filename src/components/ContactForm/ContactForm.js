import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contactsReducer);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    if (contacts.find(contact => contact.name === name.value)) {
      alert(`${name.value} is already in contacts!`);
      e.currentTarget.reset();
      return;
    }

    dispatch(addContact(name.value, number.value));
    e.currentTarget.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor="number">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.add}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.shape()),
};
