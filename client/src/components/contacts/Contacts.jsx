import React, { useContext } from 'react';
import map from 'lodash/map';

import ContactItem from './ContactItem';
import ContactContext from '../../context/contacts/contactContext';

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <>
      {map(filtered || contacts, (contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;
