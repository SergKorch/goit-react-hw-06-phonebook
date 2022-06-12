// import { useState } from 'react';
import s from './phonebook.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  return (
    <div className={s.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter title="Find contacts by name" />
      <ContactList />
    </div>
  );
};

export default App;
