import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/actions';
const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      value={value}
      onChange={onChange}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    />
  </label>
);
const mapStateToProps = state => ({
  value: state.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
