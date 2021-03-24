import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
  const { setAlert } = useContext(AlertContext);
  const { error, isAuthenticated, register, clearErrors } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
    if (error === 'User already exist') {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [clearErrors, error, history, isAuthenticated, setAlert]);

  const [user, setUser] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const { name, email, password, confirmPassword } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please fill all fields', 'danger');
    } else if (password !== confirmPassword) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="text" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" value={password} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Password</label>
          <input type="text" name="confirmPassword" value={confirmPassword} onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
