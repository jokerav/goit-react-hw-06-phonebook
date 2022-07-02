import { nanoid } from 'nanoid';

const addContact = contact => ({
  type: 'CONTACT/ADD',
  payload: {
    id: nanoid(5),
    name: contact.name,
    number: contact.number,
  },
});
export { addContact };
