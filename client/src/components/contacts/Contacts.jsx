import React, { useContext, useEffect } from 'react';
import map from 'lodash/map';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactItem from './ContactItem';
import Spinner from '../Spinner';
import ContactContext from '../../context/contacts/contactContext';

const Contacts = () => {
  const { contacts, filtered, isLoading, getContacts } = useContext(ContactContext);

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (contacts !== null && contacts.length === 0 && !isLoading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <>
      {contacts !== null && !isLoading ? (
        <TransitionGroup>
          {map(filtered || contacts, (contact) => (
            // eslint-disable-next-line no-underscore-dangle
            <CSSTransition key={contact._id} timeout={500} classNames="item">
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Contacts;
