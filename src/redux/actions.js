import { nanoid } from 'nanoid';

const addContact = contact => ({
  type: 'CONTACT/ADD',
  payload: {
    id: nanoid(5),
    name: contact.name,
    number: contact.number,
  },
});
const deleteContact = id => ({
  type: 'CONTACT/DELETE',
  payload: id,
});
const changeFilter = text => ({ type: 'FILTER/CHANGE', payload: text });
export { addContact, deleteContact, changeFilter };
