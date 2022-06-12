export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const visibleContacts = state => {
  const normalizeFilter = getFilter(state).toLowerCase();
  const contacts = getContacts(state);
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizeFilter);
  });
};
