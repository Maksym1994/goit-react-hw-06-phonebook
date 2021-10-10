import { v4 as uuidv4 } from 'uuid';
import { ADD, DELETE, FILTER } from './contacts-types';

export const newContact = (name, number) => ({
  type: ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

export const deleteContact = id => ({
  type: DELETE,
  payload: id,
});

export const changeFilter = value => ({
  type: FILTER,
  payload: value,
});
