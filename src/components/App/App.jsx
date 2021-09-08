import { useState } from 'react';
import shortid from 'shortid';
import './App.scss';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
const App = () => {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };
  const deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  const formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const sameName = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    if (sameName) {
      alert(`${name}is already in contacts.`);
    } else {
      const addContacts = {
        id: shortid.generate(),
        name: name,
        number: number,
      };
      this.setState(preState => ({
        contacts: [addContacts, ...preState.contacts],
      }));
    }
  };

  const changeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  const getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const { filter } = this.state;

  const filterContacts = this.getFilterContacts();

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
