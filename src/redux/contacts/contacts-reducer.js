import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import actions from './contacts-action';
const items = createReducer([], {
  [actions.addContacts]: (state, { payload: { name, number } }) => {
    return [...state, { id: nanoid(), name, number }];
  },
  [actions.deleteContact]: (state, { payload }) => {
    state.filter(({ id }) => id !== payload);
  },
});
const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
