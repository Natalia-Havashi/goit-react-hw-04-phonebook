import { ContainerForm } from 'components/styled.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Contacts = ({createUser}) =>  {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 

  const handleChange = (e) => {
   const {name,value} = e.target;
   if(name === 'name'){
    setName(value);
   }else if(name === 'number'){
    setNumber(value)
   }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: name,
      number:number
    };
    createUser(data);
    setName('');
      setNumber('');
    
  };

   return (
      <ContainerForm>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
          <label htmlFor="">Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
          <button>Add contact</button>
        </form>
      </ContainerForm>
    );
  }


Contacts.propTypes = {
  createUser: PropTypes.func.isRequired,
};
export default Contacts;
