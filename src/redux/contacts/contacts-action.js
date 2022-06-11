import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('contacts/add_contact');

const deleteContact = createAction('contacts/delete_contact');

const changeFilter = createAction('contacts/change_filter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContact, changeFilter };
