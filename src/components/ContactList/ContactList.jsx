import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/actions';
import { getVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={id => dispatch(deleteContact(id))}
          id={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
