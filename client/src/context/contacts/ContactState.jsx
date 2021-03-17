import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_CURRENT,
} from '../types';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: '6049d3e3f8cf223f64386e33',
        name: 'Brad Traversy',
        email: 'bras@gamil.com',
        phone: '333-333-333',
        type: 'professional',
      },
      {
        id: '6049d3bef8cf223f64386e32',
        name: 'Melissa Williams',
        email: 'melissa@gamil.com',
        phone: '333-333-333',
        type: 'personal',
      },
      {
        _id: '6049d33ef8cf223f64386e30',
        name: 'Harry White',
        email: 'harrywhite@gamil.com',
        phone: '123-123-1234',
        type: 'personal',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // SEt Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {children}
    </ContactContext.Provider>
  );
};

ContactState.propTypes = {
  children: PropTypes.node,
};

export default ContactState;
