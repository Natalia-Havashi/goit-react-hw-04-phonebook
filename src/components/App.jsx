
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Container } from './styled.styled';
import { useState, useEffect } from 'react';


const App = () => {
  const [contacts,setContacts] = useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
    const [filter,setFilter] = useState('')
 
  useEffect(()=>{
    const localData = localStorage.getItem('contacts');
    if (localData) setContacts(JSON.parse(localData)) 
  }, []); //didmount
  

  useEffect(() => { //didupdate
      localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts])

const createUser = ({ name, number }) => {
  const isContact = contacts.find((contact) => contact.name === name);

  if (isContact) {
    alert(`${name} is already in contacts`);
  } else {
    setContacts((prevContacts) => [
      ...prevContacts,
      {
        id: nanoid(),
        name: name,
        number: number,
      },
    ]);
  }
};

 const deleteContact = (id) => {
    setContacts((prev) => 
      prev.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (event) => {
    
      setFilter(event.currentTarget.value)
    
  };
  const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

    return (
      <Container>
        <h1>PhoneBook</h1>
        <ContactForm createUser={createUser} />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
        <ContactList
          filtered={filteredContacts}
          deleteContact={deleteContact}
        />
      </Container>
    );
  }


export default App;
