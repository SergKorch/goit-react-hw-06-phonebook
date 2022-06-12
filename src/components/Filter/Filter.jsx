import PropTypes from 'prop-types';
import actions from '../../redux/contacts/contacts-action';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';

const Filter = ({ title }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        <p>{title}</p>
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(actions.changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Filter;
