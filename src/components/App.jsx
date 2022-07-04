import ContactForm from './ContactsForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  // const isNameInPhonebook = name => {
  //   const nameInLowerCase = name.toLowerCase();
  //   for (const contact of contacts) {
  //     if (contact.name.toLowerCase() === nameInLowerCase) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
  // const addContact = contact => {
  //   const { name } = contact;
  //   if (!isNameInPhonebook(name)) {
  //     contact.id = nanoid(5);
  //     setContacts(prevContacts => [...prevContacts, contact]);
  //   } else {
  //     alert(`${name} is already in contacts`);
  //   }
  // };

  return (
    <div
      style={{
        fontSize: 22,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};
