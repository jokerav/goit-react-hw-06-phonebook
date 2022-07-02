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
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});
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
