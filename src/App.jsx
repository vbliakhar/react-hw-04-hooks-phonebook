import { useState, useEffect } from 'react';
import shortid from 'shortid';
import './App.scss';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';

const useLocalStorege = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
    console.log('Change');
  }, [state, key]);

  return [state, setState];
};

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorege('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };
  const formSubmitHandler = ({ name, number }) => {
    const sameName = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    if (sameName) {
      alert(`${contacts.name} is already in contacts.`);
    } else {
      const addContacts = {
        id: shortid.generate(),
        name: name,
        number: number,
      };
      setContacts(preState => [addContacts, ...preState]);
    }
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };
  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const filterContacts = getFilterContacts();

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
