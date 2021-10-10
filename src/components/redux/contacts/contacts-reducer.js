import { combineReducers } from 'redux';
import { ADD, DELETE, FILTER } from './contacts-types';

const localContacts = JSON.parse(window.localStorage.getItem('contacts'));

const contactsReducer = (state = localContacts ? localContacts : [], { type, payload }) => {
  let newState = [];
  switch (type) {
    case ADD:
      newState = [...state, payload];
      window.localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    case DELETE:
      newState = state.filter(contact => contact.id !== payload);
      window.localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
