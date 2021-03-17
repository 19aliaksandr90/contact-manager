import React, { useContext } from 'react';
import capitalize from 'lodash/capitalize';
import PropTypes from 'prop-types';

import ContactContext from '../../context/contacts/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
  };

  return (
    <div key={id} className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span className={`badge ${type === 'professional' ? 'badge-success' : 'badge-primary'}`}>
          {capitalize(type)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" />
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" />
            {phone}
          </li>
        )}
      </ul>
      <p>
        <button type="button" className="btn btn-dark btn-sm">
          Edit
        </button>
        <button type="button" className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default ContactItem;
