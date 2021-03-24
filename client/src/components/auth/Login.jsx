import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = () => {
  const { setAlert } = useContext(AlertContext);
  const { error, isAuthenticated, login, clearErrors } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
    if (error === 'Invalid credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [clearErrors, error, history, isAuthenticated, setAlert]);

  const [user, setUser] = useState({ email: '', password: '' });
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({ email, password });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="text" name="email" value={email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" value={password} onChange={onChange} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
