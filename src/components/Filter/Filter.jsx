import PropTypes from 'prop-types';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <h4>Find contacts by me</h4>
      <input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
