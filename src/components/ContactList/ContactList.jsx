// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact } from 'redux/actions';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          id={contact.id}
        />
      ))}
    </ul>
  );
};

// const normFilter = filter.toLowerCase();
// const visibleContacts = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(normFilter)
// );
const getVisibleContacts = (contacts, filter) => {
  const normFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normFilter));
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const visibleContacts = getVisibleContacts(items, filter);
  return { contacts: visibleContacts };
};
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
// ContactList.propType = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
