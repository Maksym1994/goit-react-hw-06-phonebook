import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const newContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export { newContact, deleteContact, changeFilter };
