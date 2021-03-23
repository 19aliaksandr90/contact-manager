import React, { useContext } from 'react';
import map from 'lodash/map';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactItem from './ContactItem';
import ContactContext from '../../context/contacts/contactContext';

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <>
      <TransitionGroup>
        {map(filtered || contacts, (contact) => (
          <CSSTransition key={contact.id} timeout={500} classNames="item">
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default Contacts;
