import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contacts/contactContext';

const Navbar = (props) => {
  const { title, icon } = props;
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const { clearContacts } = useContext(ContactContext);

  const history = useHistory();

  const onLogout = () => {
    logout();
    history.push('/login');
    clearContacts();
  };

  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!" onClick={onLogout}>
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary">
      <div>
        <i className={icon} />
        {title}
      </div>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
