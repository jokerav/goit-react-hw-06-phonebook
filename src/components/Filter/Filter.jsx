import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </label>
  );
}
// const mapStateToProps = state => ({
//   value: state.filter,
// });
// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });
// export default connect(mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
