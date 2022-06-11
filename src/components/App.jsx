import { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import s from './phonebook.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import useLocalStorage from '../hooks';
import { connect, useDispatch } from 'react-redux';
import actions from '../redux/contacts/contacts-action'

const App = () => {
  const defaultValue = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useLocalStorage(
    'initialContacts',
    defaultValue
  );
  const [filter, setFilter] = useState('');
const dispatch=useDispatch()
  const addContacts = ({ name, number }) => {
    const isContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isContact) {
      Notiflix.Notify.failure(`${name} is already in contact`);
      return contacts;
    } else {
      dispatch(actions.addContacts({id: nanoid(), name, number}))      
    }
  };
  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };
  // const deleteContact = itemId => {
  //   setContacts(contacts.filter(item => item.id !== itemId));
  // };


  return (
    <div className={s.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter
        title="Find contacts by name"
      />
      <ContactList
      />
    </div>
  );
};
const mapDispatchToProps=dispatch=>({
onSubmit: contact=>dispatch(actions.addContacts(contact))
})
export default connect(null, mapDispatchToProps)(App);
