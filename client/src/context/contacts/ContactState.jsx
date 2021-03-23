import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
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
        id: '6049d33ef8cf223f64386e30',
        name: 'Harry White',
        email: 'harrywhite@gamil.com',
        phone: '123-123-1234',
        type: 'personal',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

ContactState.propTypes = {
  children: PropTypes.node,
};

export default ContactState;
