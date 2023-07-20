import PropTypes from 'prop-types';

export const Contact = ({ contact, deleteContact }) => {
  return (
    <li>
      {contact.name} : {contact.number}
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
