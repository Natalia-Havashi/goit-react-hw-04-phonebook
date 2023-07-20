import { number } from 'prop-types';
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Container } from './styled.styled';
const { Component } = require('react');

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData) this.setState({ contacts: JSON.parse(localData) });
  }

  componentDidUpdate(prevState) {
    if (prevState.state !== this.state.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  createUser = ({ name }) => {
    const isContact = this.state.contacts.filter(
      contact => contact.name === name
    );

    if (isContact.length > 0) {
      alert(`${name} is alredy in contacts `);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    const filteredContactrs = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Container>
        <h1>PhoneBook</h1>
        <ContactForm createUser={this.createUser} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleFilterChange={this.handleFilterChange}
        />
        <ContactList
          filtered={filteredContactrs}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
