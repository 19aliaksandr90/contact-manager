import filter from 'lodash/filter';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_CURRENT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: filter(state.contacts, (contact) => contact.id !== action.payload),
      };

    default:
      return state;
  }
};
