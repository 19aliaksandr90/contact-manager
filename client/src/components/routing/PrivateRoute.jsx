import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ children, path, ...rest }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={!isAuthenticated && !isLoading ? <Redirect to="/login" /> : children}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
};

export default PrivateRoute;
