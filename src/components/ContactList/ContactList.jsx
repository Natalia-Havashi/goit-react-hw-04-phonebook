import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';

export const ContactList = ({ filtered, deleteContact }) => {
  return (
    <ul>
      {filtered.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
