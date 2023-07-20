import { ContainerForm } from 'components/styled.styled';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Contacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      ...this.state,
    };
    this.props.createUser(data);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <ContainerForm>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={name}
          />
          <label htmlFor="">Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={number}
          />
          <button>Add contact</button>
        </form>
      </ContainerForm>
    );
  }
}

Contacts.propTypes = {
  createUser: PropTypes.func.isRequired,
};
export default Contacts;
