import React, { useContext } from 'react';
import map from 'lodash/map';

import ContactItem from './ContactItem';
import ContactContext from '../../context/contacts/contactContext';

const Contacts = () => {
  const contextContact = useContext(ContactContext);

  const { contacts } = contextContact;

  return (
    <>
      {map(contacts, (contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;
