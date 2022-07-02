import { nanoid } from 'nanoid';

export const addContact = contact => ({
  type: 'CONTACT/ADD',
  payload: {
    id: nanoid(5),
    name: contact.name,
  },
});
