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
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: map(state.contacts, (contact) =>
          contact.id === action.payload.id ? action.payload : contact,
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: filter(state.contacts, (contact) => contact.id !== action.payload),
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
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
