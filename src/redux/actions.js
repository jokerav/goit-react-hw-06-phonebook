import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';
const addContact = createAction('CONTACT/ADD', contact => {
  const { name } = contact;
  return {
    payload: {
      name,
      id: nanoid(5),
    },
  };
});
console.log(addContact);
addContact({ name: 'jimm' });

console.log(addContact({ name: 'jimm' }));
export default addContact;
