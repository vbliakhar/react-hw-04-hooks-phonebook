import React from 'react';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id}>
      {name}:<span> {number}</span>
      <button type="button" onClick={() => onDeleteContact(id)}>
        delete
      </button>
    </li>
  );
};

export default ContactItem;
