import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import actions from './contacts-action';
const defaultValue = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const items = createReducer(defaultValue, {
  [actions.addContacts]: (state, { payload: { name, number } }) => {
    return [...state, { id: nanoid(), name, number }];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
