import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('CONTACT/ADD', contact => ({
  payload: {
    id: nanoid(5),
    name: contact.name,
    number: contact.number,
  },
}));

const deleteContact = createAction('CONTACT/DELETE');

const changeFilter = createAction('FILTER/CHANGE');

export { addContact, deleteContact, changeFilter };
