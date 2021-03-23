import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contacts/contactContext';

const ContactFilter = () => {
  const { filterContacts, clearFilter, filtered } = useContext(ContactContext);
  const ref = useRef('');

  useEffect(() => {
    if (!filtered) {
      ref.current.value = '';
    }
  }, [filtered, ref]);

  const onChange = (e) => {
    if (ref.current.value !== '') {
      filterContacts(e.target.value.trim());
    } else {
      clearFilter();
    }
  };

  const onSubmit = (e) => e.preventDefault();

  return (
    <form onSubmit={onSubmit}>
      <input ref={ref} type="text" placeholder="Filter Contact ..." onChange={onChange} />
    </form>
  );
};

export default ContactFilter;
