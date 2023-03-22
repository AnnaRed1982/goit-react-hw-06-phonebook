import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts:</h2>
      <Filter />
      <ContactList />
    </div>
  );
};





// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from '../redux/contactsSlice';
// import { deleteContact } from '../redux/contactsSlice';

// const LS_KEY = 'list_phonebook';

// const getInitialNumbers = () => {
//   const savedItems = JSON.parse(localStorage.getItem(LS_KEY));
//   if (savedItems !== null) {
//     return savedItems;
//   }
//   return [];
// };

// const [contacts, setContacts] = useState(getInitialNumbers);
// const [filter, setFilter] = useState('');

// const addContact = (name, number) => {
//   const contact = {
//     id: nanoid(),
//     name,
//     number,
//   };
//   setContacts(() => [contact, ...contacts]);
// };

// const deleteContact = id => {
//   setContacts(() => contacts.filter(contact => contact.id !== id));
// };

// const changeFilter = e => {
//   setFilter(e.currentTarget.value);
// };

// const getVisibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// useEffect(
//   prevContacts => {
//     if (prevContacts !== contacts) {
//       localStorage.setItem(LS_KEY, JSON.stringify(contacts));
//     }
//   },
//   [contacts]
// );
