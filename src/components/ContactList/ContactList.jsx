import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';
import ContactItem from './ContactItem/ContactItem';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            number={number}
            name={name}
            onDeleteContact={() => onDeleteContact(id)}
          />
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
