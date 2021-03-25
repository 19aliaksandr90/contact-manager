import filter from 'lodash/filter';
import map from 'lodash/map';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        isLoading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        isLoading: false,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: map(state.contacts, (contact) =>
          contact.id === action.payload.id ? action.payload : contact,
        ),
        isLoading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: filter(state.contacts, (contact) => contact.id !== action.payload),
        isLoading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: filter(state.contacts, (contact) => {
          const regExp = new RegExp(`${action.payload}`, 'gi');

          return contact.name.match(regExp) || contact.email.match(regExp);
        }),
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
