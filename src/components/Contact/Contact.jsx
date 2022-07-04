import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
const Contact = ({ contact, onDelete }) => {
  const dispatch = useDispatch();
  const { name, number, id } = contact;

  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => dispatch(onDelete(id))}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
