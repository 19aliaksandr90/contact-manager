import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import ContactContext from '../../context/contacts/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
    id: '',
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact({ ...contact, id: uuid() });
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Contact</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
      <input type="text" placeholder="Email" name="email" value={email} onChange={onChange} />
      <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange} />
      <h5>Contact type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional{' '}
      <div>
        <input type="submit" className="btn btn-primary btn-block" value="Add contact" />
      </div>
    </form>
  );
};

export default ContactForm;
